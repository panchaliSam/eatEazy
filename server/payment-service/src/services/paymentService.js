const PaymentModel = require('../models/paymentModel');
const { PAYHERE_MERCHANT_ID, PAYHERE_MERCHANT_SECRET } = require('../config/env');
const crypto = require('crypto');

const initiatePayment = async (OrderID, PaymentMethod) => {
    const orderDetails = await PaymentModel.getOrderDetails(OrderID);

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
};

const initiatePayHerePayment = async (orderDetails) => {
    // Ensure OrderTotal is a valid number
    const orderTotal = parseFloat(orderDetails.OrderTotal);
    if (isNaN(orderTotal)) {
        throw new Error('Invalid OrderTotal value');
    }

    // Generate temporary transaction ID
    const tempTransactionId = `TEMP_${Date.now()}`;
    
    // Construct PayHere URL
    const params = new URLSearchParams({
        merchant_id: PAYHERE_MERCHANT_ID,
        return_url: 'http://localhost:4010/api/payments/success',
        cancel_url: 'http://localhost:4010/api/payments/cancel',
        notify_url: 'http://localhost:4010/api/payments/notify',
        order_id: orderDetails.OrderID,
        items: `Order #${orderDetails.OrderID}`,
        amount: orderTotal.toFixed(2),  // Now we are sure it's a number
        currency: 'LKR',
        sandbox: '1'
    });

    return {
        TransactionID: tempTransactionId,
        redirectUrl: `https://sandbox.payhere.lk/pay/checkout?${params.toString()}`
    };
};

// Verify PayHere Payment Notification Hash
const verifyPaymentHash = (payload) => {
    const hashString = `${payload.merchant_id}${payload.order_id}${payload.payhere_amount}${payload.payhere_currency}${payload.status_code}${PAYHERE_MERCHANT_SECRET}`;
    const computedHash = crypto.createHash('md5').update(hashString).digest('hex').toUpperCase();

    return computedHash === payload.md5sig;
};

// Update payment status in the database
const updatePaymentStatus = async (PaymentID, PaymentStatus) => {
    await PaymentModel.updatePaymentStatus(PaymentID, PaymentStatus);
};

module.exports = { initiatePayment, updatePaymentStatus, verifyPaymentHash };
