// services/paymentService.js
const crypto = require('crypto');
const axios = require('axios');
const PaymentModel = require('../models/paymentModel');
const PaymentRepository = require('../repository/paymentRepository');
const {
  PAYHERE_MERCHANT_SECRET,
  PAYHERE_MERCHANT_ID,
  PAYHERE_RETURN_URL,
  PAYHERE_CANCEL_URL,
  PAYHERE_NOTIFY_URL,
  SERVICE_API_KEY,
  NOTIFICATION_SERVICE_URL,
  API_GATEWAY_URL,
  NODE_ENV
} = require('../config/env');

// Helper: Generate PayHere Signature
const generateSignature = (orderDetails, merchantSecret) => {
  const stringToHash = `${orderDetails.merchant_id}${orderDetails.order_id}${orderDetails.amount}${orderDetails.currency}${merchantSecret}`;
  return crypto.createHash('md5').update(stringToHash).digest('hex').toUpperCase();
};

// Helper: Update order service payment status (with retry)
const updateOrderPaymentStatus = async (OrderID, paymentStatus) => {
  const orderServiceUrl = process.env.ORDER_SERVICE_URL || 'http://localhost:4000';

  try {
    const response = await axios.put(`${orderServiceUrl}/orders/${OrderID}/payment-status`, {
      paymentStatus
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SERVICE_API_KEY}`
      },
      timeout: 5000
    });
    
    console.log(`Order #${OrderID} payment status updated to ${paymentStatus}`);
    return response.data;
  } catch (error) {
    console.error(`Initial update failed for order #${OrderID}:`, error.response?.data || error.message);
    
    try {
      console.log(`Retrying update for order #${OrderID}...`);
      await new Promise(resolve => setTimeout(resolve, 2000));
      const retryResponse = await axios.put(`${orderServiceUrl}/orders/${OrderID}/payment-status`, {
        paymentStatus
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SERVICE_API_KEY}`
        },
        timeout: 5000
      });
      return retryResponse.data;
    } catch (retryError) {
      console.error(`Retry also failed for order #${OrderID}:`, retryError.response?.data || retryError.message);
      // Log but don't throw - we want to continue even if this fails
      console.warn(`Continuing despite order update failure for order #${OrderID}`);
      return { success: false, error: 'Failed to update order status' };
    }
  }
};

// Helper: Send Email Notification
const sendEmailNotification = async (orderID, paymentStatus, amount, userToken) => {
  try {
    // First get order details to get the user info
    const orderDetails = await getOrderDetailsFromService(orderID, userToken);
    if (!orderDetails) {
      console.error(`Order details not found for order #${orderID}`);
      return { success: false, error: 'Order details not found' };
    }

    const notificationServiceUrl = API_GATEWAY_URL || 'http://localhost:4010';
    
    // Determine notification type based on payment status
    const notificationType = paymentStatus === 'Completed' ? 'paymentSuccess' : 'paymentFailed';
    
    const response = await axios.post(`${notificationServiceUrl}/notifications/send-email`, {
      email: orderDetails.Email || orderDetails.UserEmail,
      userId: orderDetails.UserID,
      type: notificationType,
      data: {
        orderId: orderID,
        totalAmount: amount,
        customerName: orderDetails.Name || orderDetails.UserName || 'Customer'
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SERVICE_API_KEY}`
      },
      timeout: 5000
    });

    console.log(`Payment email notification sent for order #${orderID}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to send email notification for order #${orderID}:`, error.response?.data || error.message);
    // Log but continue - this is non-critical
    return { success: false, error: error.message };
  }
};

// Helper: Send SMS Notification
const sendSMSNotification = async (orderID, paymentStatus, amount, userToken) => {
  try {
    // First get order details to get the user info
    const orderDetails = await getOrderDetailsFromService(orderID, userToken);
    if (!orderDetails || !orderDetails.Phone) {
      console.error(`Order details or phone not found for order #${orderID}`);
      return { success: false, error: 'Order details or phone not found' };
    }

    const notificationServiceUrl = API_GATEWAY_URL || 'http://localhost:4010';
    
    // Determine notification type based on payment status
    const notificationType = paymentStatus === 'Completed' ? 'paymentSuccess' : 'paymentFailed';
    
    const response = await axios.post(`${notificationServiceUrl}/notifications/send-sms`, {
      phone: orderDetails.Phone,
      userId: orderDetails.UserID,
      type: notificationType,
      data: {
        orderId: orderID,
        totalAmount: amount
      }
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SERVICE_API_KEY}`
      },
      timeout: 5000
    });

    console.log(`Payment SMS notification sent for order #${orderID}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to send SMS notification for order #${orderID}:`, error.response?.data || error.message);
    // Log but continue - this is non-critical
    return { success: false, error: error.message };
  }
};

// Helper: Create in-app notification
const createInAppNotification = async (orderID, paymentStatus, amount, userToken) => {
  try {
    // First get order details to get the user info
    const orderDetails = await getOrderDetailsFromService(orderID, userToken);
    if (!orderDetails) {
      console.error(`Order details not found for order #${orderID}`);
      return { success: false, error: 'Order details not found' };
    }

    const notificationServiceUrl = API_GATEWAY_URL || 'http://localhost:4010';
    
    // Construct appropriate message based on payment status
    let message;
    if (paymentStatus === 'Completed') {
      message = `Payment of LKR ${amount} for order #${orderID} was successful.`;
    } else if (paymentStatus === 'Failed') {
      message = `Payment for order #${orderID} has failed. Please try again.`;
    } else {
      message = `Payment status for order #${orderID} changed to ${paymentStatus}.`;
    }
    
    const response = await axios.post(`${notificationServiceUrl}/notifications/in-app`, {
      userId: orderDetails.UserID,
      message: message,
      channel: 'InApp',
      type: 'PAYMENT_STATUS_CHANGE'
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SERVICE_API_KEY}`
      },
      timeout: 5000
    });

    console.log(`In-app notification sent for order #${orderID}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to send in-app notification for order #${orderID}:`, error.response?.data || error.message);
    // Log but continue - this is non-critical
    return { success: false, error: error.message };
  }
};

// Master notification function that manages all notification channels
const sendPaymentNotification = async (orderID, paymentStatus, amount) => {
  const results = {
    inApp: false,
    email: false,
    sms: false
  };

  try {
    // First, always try to create in-app notification
    const inAppResult = await createInAppNotification(orderID, paymentStatus, amount);
    results.inApp = inAppResult.success !== false;
    
    // Then try email notification
    const emailResult = await sendEmailNotification(orderID, paymentStatus, amount);
    results.email = emailResult.success !== false;
    
    // Finally try SMS for completed/failed payments only
    if (paymentStatus === 'Completed' || paymentStatus === 'Failed') {
      const smsResult = await sendSMSNotification(orderID, paymentStatus, amount);
      results.sms = smsResult.success !== false;
    }
    
    console.log(`Payment notifications sent for order #${orderID}:`, results);
    return {
      success: true,
      channels: results
    };
  } catch (error) {
    console.error(`Error in notification process for order #${orderID}:`, error.message);
    return {
      success: false,
      channels: results,
      error: error.message
    };
  }
};

// Get order details
const getOrderDetailsFromService = async (OrderID, userToken) => {
  return await PaymentRepository.getOrderDetailsFromService(OrderID, userToken);
};

// Payment initiation
const initiatePayment = async (OrderID, PaymentMethod, userToken) => {

  // Only PayHere supported for now
  if (PaymentMethod !== 'PayHere') {
    throw new Error(`Payment method '${PaymentMethod}' is not supported yet.`);
  }

  // Try to get order details from the order service
  let orderDetails = await getOrderDetailsFromService(OrderID, userToken);

  // Check for existing active payment
  const existingPayments = await PaymentModel.getPaymentsByOrderId(OrderID);

  const hasActivePayment = existingPayments?.some(p => 
    p.PaymentStatus === 'Pending' || p.PaymentStatus === 'Completed'
  );

  if (hasActivePayment) {
    throw new Error(`A payment for Order #${OrderID} is already in progress or completed.`);
  }
  
  
  // DEVELOPMENT ONLY: If order details can't be fetched, use a mock for development
  if (!orderDetails && (NODE_ENV === 'development' || NODE_ENV === 'test')) {
    console.warn(`Using mock order details for OrderID ${OrderID} due to service unavailability.`);
    orderDetails = {
      TotalAmount: 1000, // Example amount of 1000 LKR
      UserID: 'mock-user',
      UserEmail: 'mock@example.com',
      Name: 'Mock User',
      Phone: '1234567890'
    };
  } else if (!orderDetails) {
    throw new Error(`Order #${OrderID} not found`);
  }

  let orderTotal = typeof orderDetails.TotalAmount === 'number'
    ? orderDetails.TotalAmount
    : parseFloat(orderDetails.TotalAmount);

  if (isNaN(orderTotal)) {
    throw new Error('Invalid TotalAmount value');
  }

  const TransactionID = `TEMP_${Date.now()}`;
  const paymentData = {
    OrderID,
    TransactionID,
    PaymentMethod,
    PaymentStatus: 'Pending',
    Amount: orderTotal
  };

  const PaymentID = await PaymentModel.createPayment(paymentData);
  let redirectUrl = '';

  if (PaymentMethod === 'PayHere') {
    const baseUrl = process.env.PAYHERE_BASE_URL || 'https://sandbox.payhere.lk/pay/checkout';
    const hash = generateSignature({
      merchant_id: PAYHERE_MERCHANT_ID,
      order_id: OrderID.toString(),
      amount: orderTotal.toFixed(2),
      currency: 'LKR'
    }, PAYHERE_MERCHANT_SECRET);

    const queryParams = new URLSearchParams({
      merchant_id: PAYHERE_MERCHANT_ID,
      return_url: PAYHERE_RETURN_URL,
      cancel_url: PAYHERE_CANCEL_URL,
      notify_url: PAYHERE_NOTIFY_URL,
      order_id: OrderID.toString(),
      items: `Order #${OrderID}`,
      amount: orderTotal.toFixed(2),
      currency: 'LKR',
      hash
    }).toString();

    redirectUrl = `${baseUrl}?${queryParams}`;
  } else {
    redirectUrl = 'Not implemented yet';
  }

  try {
    // Try to update order status, but don't block if it fails
    await updateOrderPaymentStatus(OrderID, 'Pending').catch(err => {
      console.error(`Order update failed during payment initiation:`, err.message);
    });
    
    // Try to create notification for payment initiated
    await createInAppNotification(OrderID, 'Pending', orderTotal).catch(err => {
      console.error(`Notification failed during payment initiation:`, err.message);
    });
  } catch (err) {
    // Log but continue - these are non-critical operations
    console.warn(`Non-critical operations failed during payment initiation for order #${OrderID}`);
  }

  return {
    PaymentID,
    redirectUrl,
    PaymentStatus: 'Pending'
  };
};

// Process PayHere Notification
const processPayHereNotification = async (data) => {
  const {
    merchant_id,
    order_id,
    payment_id,
    payhere_amount,
    payhere_currency,
    status_code,
    md5sig
  } = data;

  // 1) Verify the MD5 signature to ensure the notification is genuine
  const stringToHash = `${merchant_id}${order_id}${payhere_amount}${payhere_currency}${status_code}${crypto.createHash('md5').update(PAYHERE_MERCHANT_SECRET).digest('hex')}`;
  const localSig = crypto.createHash('md5').update(stringToHash).digest('hex').toUpperCase();

  if (md5sig !== localSig) {
    throw new Error('MD5 signature mismatch');
  }

  // 2) Determine final payment status
  const paymentStatus = status_code === '2' ? 'Completed' : 'Failed';
  // 3) See if there's already a pending payment record
  const existingPayments = await PaymentModel.getPaymentsByOrderId(order_id);
  let paymentID;

  if (existingPayments && existingPayments.length > 0) {
    // 3a) If a "Pending" record exists, update it
    const pendingPayment = existingPayments.find(p => p.PaymentStatus === 'Pending');
    if (pendingPayment) {
      paymentID = pendingPayment.PaymentID;
      await PaymentModel.updatePaymentStatus(paymentID, paymentStatus);
    } else {
      // 3b) Otherwise, create a new record
      const paymentData = {
        OrderID: order_id,
        TransactionID: payment_id,
        PaymentMethod: 'PayHere',
        PaymentStatus: paymentStatus,
        Amount: payhere_amount
      };
      paymentID = await PaymentModel.createPayment(paymentData);
    }
  } else {
    const paymentData = {
      OrderID: order_id,
      TransactionID: payment_id,
      PaymentMethod: 'PayHere',
      PaymentStatus: paymentStatus,
      Amount: payhere_amount
    };
    paymentID = await PaymentModel.createPayment(paymentData);
  }

  // 4) Update the order's payment status in the Order Service
  try {
    await updateOrderPaymentStatus(order_id, paymentStatus).catch(err => {
      console.error(`Failed to update order status for #${order_id}:`, err.message);
    });
  } catch (err) {
    console.warn(`Order status update failed for #${order_id}, but continuing...`);
  }

  // Try to send notifications, but don't block on failure
  try {
    await sendPaymentNotification(order_id, paymentStatus, payhere_amount).catch(err => {
      console.error(`Failed to send notification for #${order_id}:`, err.message);
    });
  } catch (err) {
    console.warn(`Notifications failed for #${order_id}, but continuing...`);
  }

  // 6) Finally return to PayHere
  return {
    message: 'Payment processed and saved',
    paymentID,
    status: paymentStatus
  };
};

// Update payment status manually
const updatePaymentStatus = async (PaymentID, PaymentStatus) => {
  await PaymentModel.updatePaymentStatus(PaymentID, PaymentStatus);
  const paymentDetails = await PaymentModel.getPaymentById(PaymentID);
  if (!paymentDetails) throw new Error(`Payment #${PaymentID} not found`);

  // Try to update order status, but don't block on failure
  try {
    await updateOrderPaymentStatus(paymentDetails.OrderID, PaymentStatus).catch(err => {
      console.error(`Failed to update order #${paymentDetails.OrderID} status:`, err.message);
    });
  } catch (err) {
    console.warn(`Order status update failed for #${paymentDetails.OrderID}, but continuing...`);
  }

  // Try to send notifications, but don't block on failure
  try {
    await sendPaymentNotification(paymentDetails.OrderID, PaymentStatus, paymentDetails.Amount).catch(err => {
      console.error(`Failed to notify for order #${paymentDetails.OrderID}:`, err.message);
    });
  } catch (err) {
    console.warn(`Notifications failed for #${paymentDetails.OrderID}, but continuing...`);
  }

  return { success: true };
};

const getPaymentById = async (PaymentID) => {
  const payment = await PaymentModel.getPaymentById(PaymentID);
  if (!payment) {
    throw new Error(`Payment with ID ${PaymentID} not found`);
  }
  return payment;
};

const getPaymentsByOrderId = async (OrderID) => {
  const payments = await PaymentModel.getPaymentsByOrderId(OrderID);
  if (!payments || payments.length === 0) {
    throw new Error(`No payments found for Order #${OrderID}`);
  }
  return payments;
};

// Expose functions
module.exports = {
  initiatePayment,
  processPayHereNotification,
  updatePaymentStatus,
  generateSignature,
  updateOrderPaymentStatus,
  sendPaymentNotification,
  getPaymentById,
  getPaymentsByOrderId,
  getOrderDetailsFromService
};