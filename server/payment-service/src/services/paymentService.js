const crypto = require('crypto');
const axios = require('axios');
const PaymentModel = require('../models/paymentModel');
const {
  PAYHERE_MERCHANT_SECRET,
  PAYHERE_MERCHANT_ID,
  PAYHERE_RETURN_URL,
  PAYHERE_CANCEL_URL,
  PAYHERE_NOTIFY_URL,
  SERVICE_API_KEY
} = require('../config/env');

// Helper function to generate PayHere signature
const generateSignature = (orderDetails, merchantSecret) => {
  const stringToHash = `${orderDetails.merchant_id}${orderDetails.order_id}${orderDetails.amount}${orderDetails.currency}${merchantSecret}`;
  
  // Generate the MD5 hash of the string
  const signature = crypto.createHash('md5').update(stringToHash).digest('hex').toUpperCase();
  
  return signature;
};

// Function to initiate payment
const initiatePayment = async (OrderID, PaymentMethod) => {
  const orderDetails = await PaymentModel.getOrderDetails(OrderID);
  if (!orderDetails) throw new Error(`Order #${OrderID} not found`);

  // Check if OrderTotal is a valid number and convert it if necessary
  let orderTotal = orderDetails.TotalAmount;
  if (typeof orderTotal !== 'number') {
    orderTotal = parseFloat(orderTotal);
    if (isNaN(orderTotal)) {
      throw new Error('Invalid TotalAmount value');
    }
  }

  const TransactionID = `TEMP_${Date.now()}`;
  const paymentData = {
    OrderID,
    TransactionID,
    PaymentMethod,
    PaymentStatus: 'Pending',
    Amount: orderTotal
  };

  // Create payment record
  const PaymentID = await PaymentModel.createPayment(paymentData);

  // Prepare payment gateway URL and parameters
  let redirectUrl = '';
  
  if (PaymentMethod === 'PayHere') {
    const baseUrl = process.env.PAYHERE_BASE_URL || 'https://sandbox.payhere.lk/pay/checkout';
    const queryParams = new URLSearchParams({
      merchant_id: PAYHERE_MERCHANT_ID,
      return_url: PAYHERE_RETURN_URL,
      cancel_url: PAYHERE_CANCEL_URL,
      notify_url: PAYHERE_NOTIFY_URL,
      order_id: OrderID.toString(),
      items: `Order #${OrderID}`,
      amount: orderTotal.toFixed(2),
      currency: 'LKR',
      hash: generateSignature({
        merchant_id: PAYHERE_MERCHANT_ID,
        order_id: OrderID.toString(),
        amount: orderTotal.toFixed(2),
        currency: 'LKR'
      }, PAYHERE_MERCHANT_SECRET)
    }).toString();

    redirectUrl = `${baseUrl}?${queryParams}`;
  } else if (PaymentMethod === 'Dialog Genie') {
    // Implement Dialog Genie payment gateway integration
    redirectUrl = 'Not implemented yet';
  } else if (PaymentMethod === 'FriMi') {
    // Implement FriMi payment gateway integration
    redirectUrl = 'Not implemented yet';
  } else if (PaymentMethod === 'Stripe') {
    // Implement Stripe payment gateway integration
    redirectUrl = 'Not implemented yet';
  } else if (PaymentMethod === 'PayPal') {
    // Implement PayPal payment gateway integration
    redirectUrl = 'Not implemented yet';
  } else {
    throw new Error(`Payment method ${PaymentMethod} not supported`);
  }

  // Notify order service about payment initiation
  try {
    await updateOrderPaymentStatus(OrderID, 'Pending');
  } catch (error) {
    console.error(`Failed to update order #${OrderID} payment status:`, error.message);
    // Continue with payment process even if order update fails
  }

  return {
    PaymentID,
    redirectUrl,
    PaymentStatus: 'Pending'
  };
};

// Process PayHere notification
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

  const mid = String(merchant_id).trim();
  const oid = String(order_id).trim();
  const amount = String(payhere_amount).trim();
  const currency = String(payhere_currency).trim();
  const code = String(status_code).trim();

  // Verify signature
  const merchantSecretMd5 = crypto.createHash('md5')
    .update(PAYHERE_MERCHANT_SECRET)
    .digest('hex');

  const stringToHash = mid + oid + amount + currency + code + merchantSecretMd5;
  const localSig = crypto.createHash('md5')
    .update(stringToHash)
    .digest('hex')
    .toUpperCase();

  console.log("Expected Signature:", localSig);
  console.log("Received Signature:", md5sig);

  if (md5sig !== localSig) {
    throw new Error('MD5 signature mismatch');
  }

  const paymentStatus = status_code === '2' ? 'Completed' : 'Failed';
  
  // Check if this payment has already been processed
  const existingPayments = await PaymentModel.getPaymentsByOrderId(order_id);
  let paymentID;
  
  if (existingPayments && existingPayments.length > 0) {
    // Update existing payment if found
    const pendingPayment = existingPayments.find(p => p.PaymentStatus === 'Pending');
    if (pendingPayment) {
      paymentID = pendingPayment.PaymentID;
      await PaymentModel.updatePaymentStatus(paymentID, paymentStatus);
    } else {
      // Create new payment record if no pending payment found
      const paymentData = {
        OrderID: order_id,
        TransactionID: payment_id,
        PaymentMethod: 'PayHere',
        PaymentStatus: paymentStatus,
        Amount: payhere_amount
      };
      paymentID = await PaymentModel.createPayment(paymentData);
    }
  }
  // Notify order service about payment status
  try {
    await updateOrderPaymentStatus(order_id, paymentStatus);
  } catch (error) {
    console.error(`Failed to update order #${order_id} payment status:`, error.message);
    // Log error but continue processing
  }

  // Notify notification service about payment completion
  try {
    await sendPaymentNotification(order_id, paymentStatus, payhere_amount);
  } catch (error) {
    console.error(`Failed to send payment notification for order #${order_id}:`, error.message);
    // Log error but continue processing
  }

  return {
    message: 'Payment processed and saved',
    paymentID,
    status: paymentStatus
  };
};

// Update payment status
const updatePaymentStatus = async (PaymentID, PaymentStatus) => {
  // Update payment status in database
  await PaymentModel.updatePaymentStatus(PaymentID, PaymentStatus);
  
  // Get payment details to update order service
  const paymentDetails = await PaymentModel.getPaymentById(PaymentID);
  
  if (!paymentDetails) {
    throw new Error(`Payment #${PaymentID} not found`);
  }
  
  // Notify order service about payment status change
  try {
    await updateOrderPaymentStatus(paymentDetails.OrderID, PaymentStatus);
  } catch (error) {
    console.error(`Failed to update order #${paymentDetails.OrderID} payment status:`, error.message);
    // Log error but continue processing
  }
  
  // Notify notification service about payment status change
  try {
    await sendPaymentNotification(paymentDetails.OrderID, PaymentStatus, paymentDetails.Amount);
  } catch (error) {
    console.error(`Failed to send payment notification for order #${paymentDetails.OrderID}:`, error.message);
    // Log error but continue processing
  }
};

// Function to update order service
const updateOrderPaymentStatus = async (orderID, paymentStatus) => {
  try {
    // Get the order service URL from environment variables
    const ORDER_SERVICE_URL = process.env.ORDER_SERVICE_URL || 'http://localhost:5006';
    
    // Call the order service API
    const response = await axios.put(`${ORDER_SERVICE_URL}/orders/${orderID}/payment-status`, {
      paymentStatus: paymentStatus
    }, {
      headers: {
        'Content-Type': 'application/json',
        // Include service-to-service authentication
        'Authorization': `Bearer ${SERVICE_API_KEY}`
      },
      // Add timeout to prevent long-hanging requests
      timeout: 5000
    });
    
    console.log(`Order #${orderID} payment status updated to ${paymentStatus}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to update order #${orderID} payment status:`, error.response?.data || error.message);
    
    // Implement retry logic (simplified version)
    try {
      console.log(`Retrying update for order #${orderID}...`);
      // Retry once after a short delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const ORDER_SERVICE_URL = process.env.ORDER_SERVICE_URL || 'http://localhost:5006';
      const retryResponse = await axios.put(`${ORDER_SERVICE_URL}/orders/${orderID}/payment-status`, {
        paymentStatus: paymentStatus
      }, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${SERVICE_API_KEY}`
        },
        timeout: 5000
      });
      
      console.log(`Retry successful: Order #${orderID} payment status updated to ${paymentStatus}`);
      return retryResponse.data;
    } catch (retryError) {
      console.error(`Retry failed for order #${orderID}:`, retryError.message);
      // In a production system, you might want to queue this for later processing
      throw new Error(`Failed to update order payment status: ${error.message}`);
    }
  }
};

// Function to send notification about payment status
const sendPaymentNotification = async (orderID, paymentStatus, amount) => {
  try {
    // Get the notification service URL from environment variables
    const NOTIFICATION_SERVICE_URL = process.env.NOTIFICATION_SERVICE_URL || 'http://localhost:4010';
    
    // Call the notification service API
    const response = await axios.post(`${NOTIFICATION_SERVICE_URL}/notifications`, {
      type: 'PAYMENT_STATUS_CHANGE',
      orderID: orderID,
      paymentStatus: paymentStatus,
      amount: amount,
      timestamp: new Date().toISOString()
    }, {
      headers: {
        'Content-Type': 'application/json',
        // Include service-to-service authentication
        'Authorization': `Bearer ${SERVICE_API_KEY}`
      },
      // Add timeout to prevent long-hanging requests
      timeout: 5000
    });
    
    console.log(`Payment notification sent for order #${orderID}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to send notification for order #${orderID}:`, error.response?.data || error.message);
    
    // Log error but don't throw - notifications are important but not critical
    return { success: false, error: error.message };
  }
};

// Add the missing getPaymentById function
const getPaymentById = async (paymentId) => {
  const payment = await PaymentModel.getPaymentById(paymentId);
  if (!payment) {
    throw new Error(`Payment with ID ${paymentId} not found`);
  }
  return payment;
};

module.exports = {
  initiatePayment,
  processPayHereNotification,
  updatePaymentStatus,
  generateSignature,
  updateOrderPaymentStatus,
  sendPaymentNotification,
  getPaymentById
};
