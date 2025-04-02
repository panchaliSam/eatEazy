<<<<<<< HEAD
const PaymentModel = require('../models/paymentModel');
const { 
    PAYHERE_MERCHANT_ID, 
    PAYHERE_MERCHANT_SECRET,
    PAYHERE_SANDBOX_URL,
    PAYHERE_RETURN_URL,
    PAYHERE_CANCEL_URL,
    PAYHERE_NOTIFY_URL,
    PAYHERE_MODE
} = require('../config/env');
const crypto = require('crypto');

const initiatePayment = async (OrderID, PaymentMethod) => {
    try {
        const orderDetails = await PaymentModel.getOrderDetails(OrderID);

        if (!orderDetails) {
            throw new Error(`Order #${OrderID} not found`);
        }

        let paymentResponse;
        switch (PaymentMethod) {
            case 'PayHere':
                paymentResponse = await initiatePayHerePayment(orderDetails);
                break;
            default:
                throw new Error('Unsupported payment method');
        }

        const paymentData = {
            OrderID,
            PaymentMethod,
            PaymentStatus: 'Pending',
            TransactionID: paymentResponse.TransactionID,
        };

        const PaymentID = await PaymentModel.createPayment(paymentData);
        return { 
            PaymentID, 
            redirectUrl: paymentResponse.redirectUrl,
            PaymentStatus: 'Pending'
        };
    } catch (error) {
        console.error('Payment initiation error:', error);
        throw error;
    }
};

const initiatePayHerePayment = async (orderDetails) => {
    try {
        // Ensure OrderTotal is a valid number
        const orderTotal = parseFloat(orderDetails.OrderTotal);
        if (isNaN(orderTotal)) {
            throw new Error('Invalid OrderTotal value');
        }

        // Generate temporary transaction ID
        const tempTransactionId = `TEMP_${Date.now()}`;
        
        // Base URL for PayHere
        const baseUrl = PAYHERE_SANDBOX_URL || 'https://sandbox.payhere.lk/pay/checkout';
        
        // Get URLs from environment or use defaults
        const returnUrl = PAYHERE_RETURN_URL || 'http://localhost:4010/api/payments/success';
        const cancelUrl = PAYHERE_CANCEL_URL || 'http://localhost:4010/api/payments/cancel';
        const notifyUrl = PAYHERE_NOTIFY_URL || 'http://localhost:4010/api/payments/notify';
        
        // Construct PayHere URL parameters
        const params = {
            merchant_id: PAYHERE_MERCHANT_ID,
            return_url: returnUrl,
            cancel_url: cancelUrl,
            notify_url: notifyUrl,
            order_id: orderDetails.OrderID,
            items: `Order #${orderDetails.OrderID}`,
            amount: orderTotal.toFixed(2),
            currency: 'LKR'
        };
        
        // Add sandbox parameter if in sandbox mode
        if (PAYHERE_MODE === 'sandbox') {
            params.sandbox = '1';
        }
        
        // Build the query string manually to ensure proper encoding
        const queryString = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            .join('&');
            
        // Full redirect URL
        const redirectUrl = `${baseUrl}?${queryString}`;
        
        // Log the URL for debugging
        console.log('PayHere Redirect URL:', redirectUrl);
        
        return {
            TransactionID: tempTransactionId,
            redirectUrl: redirectUrl
        };
    } catch (error) {
        console.error('PayHere payment error:', error);
        throw error;
    }
};

// Verify PayHere Payment Notification Hash
const verifyPaymentHash = (payload) => {
    try {
        if (!payload || !payload.md5sig) {
            return false;
        }
        
        const hashString = `${payload.merchant_id}${payload.order_id}${payload.payhere_amount}${payload.payhere_currency}${payload.status_code}${PAYHERE_MERCHANT_SECRET}`;
        const computedHash = crypto.createHash('md5').update(hashString).digest('hex').toUpperCase();

        return computedHash === payload.md5sig;
    } catch (error) {
        console.error('Hash verification error:', error);
        return false;
    }
};

// Update payment status in the database
const updatePaymentStatus = async (PaymentID, PaymentStatus) => {
    try {
        await PaymentModel.updatePaymentStatus(PaymentID, PaymentStatus);
    } catch (error) {
        console.error('Update payment status error:', error);
        throw error;
    }
};

// Process notification from PayHere
const processPaymentNotification = async (notificationData) => {
    try {
        // Verify signature
        if (!verifyPaymentHash(notificationData)) {
            throw new Error('Invalid payment notification signature');
        }
        
        const orderId = notificationData.order_id;
        const statusCode = parseInt(notificationData.status_code);
        
        // Map PayHere status codes to our status
        let paymentStatus;
        switch (statusCode) {
            case 2: // Success
                paymentStatus = 'Completed';
                break;
            case 0: // Pending
                paymentStatus = 'Pending';
                break;
            default:
                paymentStatus = 'Failed';
        }
        
        // Get payment record by OrderID
        const payment = await PaymentModel.getPaymentByOrderId(orderId);
        
        if (!payment) {
            throw new Error('Payment record not found');
        }
        
        // Update payment status
        await updatePaymentStatus(payment.PaymentID, paymentStatus);
        
        return {
            success: true,
            message: 'Payment notification processed successfully'
        };
    } catch (error) {
        console.error('Process payment notification error:', error);
        throw error;
    }
};

module.exports = { 
    initiatePayment, 
    updatePaymentStatus, 
    verifyPaymentHash,
    processPaymentNotification
=======
const PaymentModel = require('../models/paymentModel');
const { 
    PAYHERE_MERCHANT_ID, 
    PAYHERE_MERCHANT_SECRET,
    PAYHERE_SANDBOX_URL,
    PAYHERE_RETURN_URL,
    PAYHERE_CANCEL_URL,
    PAYHERE_NOTIFY_URL,
    PAYHERE_MODE
} = require('../config/env');
const crypto = require('crypto');

const initiatePayment = async (OrderID, PaymentMethod) => {
    try {
        const orderDetails = await PaymentModel.getOrderDetails(OrderID);

        if (!orderDetails) {
            throw new Error(`Order #${OrderID} not found`);
        }

        let paymentResponse;
        switch (PaymentMethod) {
            case 'PayHere':
                paymentResponse = await initiatePayHerePayment(orderDetails);
                break;
            default:
                throw new Error('Unsupported payment method');
        }

        const paymentData = {
            OrderID,
            PaymentMethod,
            PaymentStatus: 'Pending',
            TransactionID: paymentResponse.TransactionID,
        };

        const PaymentID = await PaymentModel.createPayment(paymentData);
        return { 
            PaymentID, 
            redirectUrl: paymentResponse.redirectUrl,
            PaymentStatus: 'Pending'
        };
    } catch (error) {
        console.error('Payment initiation error:', error);
        throw error;
    }
};

const initiatePayHerePayment = async (orderDetails) => {
    try {
        // Ensure OrderTotal is a valid number
        const orderTotal = parseFloat(orderDetails.OrderTotal);
        if (isNaN(orderTotal)) {
            throw new Error('Invalid OrderTotal value');
        }

        // Generate temporary transaction ID
        const tempTransactionId = `TEMP_${Date.now()}`;
        
        // Base URL for PayHere
        const baseUrl = PAYHERE_SANDBOX_URL || 'https://sandbox.payhere.lk/pay/checkout';
        
        // Get URLs from environment or use defaults
        const returnUrl = PAYHERE_RETURN_URL || 'http://localhost:4010/api/payments/success';
        const cancelUrl = PAYHERE_CANCEL_URL || 'http://localhost:4010/api/payments/cancel';
        const notifyUrl = PAYHERE_NOTIFY_URL || 'http://localhost:4010/api/payments/notify';
        
        // Construct PayHere URL parameters
        const params = {
            merchant_id: PAYHERE_MERCHANT_ID,
            return_url: returnUrl,
            cancel_url: cancelUrl,
            notify_url: notifyUrl,
            order_id: orderDetails.OrderID,
            items: `Order #${orderDetails.OrderID}`,
            amount: orderTotal.toFixed(2),
            currency: 'LKR'
        };
        
        // Add sandbox parameter if in sandbox mode
        if (PAYHERE_MODE === 'sandbox') {
            params.sandbox = '1';
        }
        
        // Build the query string manually to ensure proper encoding
        const queryString = Object.keys(params)
            .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
            .join('&');
            
        // Full redirect URL
        const redirectUrl = `${baseUrl}?${queryString}`;
        
        // Log the URL for debugging
        console.log('PayHere Redirect URL:', redirectUrl);
        
        return {
            TransactionID: tempTransactionId,
            redirectUrl: redirectUrl
        };
    } catch (error) {
        console.error('PayHere payment error:', error);
        throw error;
    }
};

// Verify PayHere Payment Notification Hash
const verifyPaymentHash = (payload) => {
    try {
        if (!payload || !payload.md5sig) {
            return false;
        }
        
        const hashString = `${payload.merchant_id}${payload.order_id}${payload.payhere_amount}${payload.payhere_currency}${payload.status_code}${PAYHERE_MERCHANT_SECRET}`;
        const computedHash = crypto.createHash('md5').update(hashString).digest('hex').toUpperCase();

        return computedHash === payload.md5sig;
    } catch (error) {
        console.error('Hash verification error:', error);
        return false;
    }
};

// Update payment status in the database
const updatePaymentStatus = async (PaymentID, PaymentStatus) => {
    try {
        await PaymentModel.updatePaymentStatus(PaymentID, PaymentStatus);
    } catch (error) {
        console.error('Update payment status error:', error);
        throw error;
    }
};

// Process notification from PayHere
const processPaymentNotification = async (notificationData) => {
    try {
        // Verify signature
        if (!verifyPaymentHash(notificationData)) {
            throw new Error('Invalid payment notification signature');
        }
        
        const orderId = notificationData.order_id;
        const statusCode = parseInt(notificationData.status_code);
        
        // Map PayHere status codes to our status
        let paymentStatus;
        switch (statusCode) {
            case 2: // Success
                paymentStatus = 'Completed';
                break;
            case 0: // Pending
                paymentStatus = 'Pending';
                break;
            default:
                paymentStatus = 'Failed';
        }
        
        // Get payment record by OrderID
        const payment = await PaymentModel.getPaymentByOrderId(orderId);
        
        if (!payment) {
            throw new Error('Payment record not found');
        }
        
        // Update payment status
        await updatePaymentStatus(payment.PaymentID, paymentStatus);
        
        return {
            success: true,
            message: 'Payment notification processed successfully'
        };
    } catch (error) {
        console.error('Process payment notification error:', error);
        throw error;
    }
};

module.exports = { 
    initiatePayment, 
    updatePaymentStatus, 
    verifyPaymentHash,
    processPaymentNotification
>>>>>>> 3d4f402a39c80d79e1809a4c29ce3c43474529c0
};