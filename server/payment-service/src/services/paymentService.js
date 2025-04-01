const PaymentModel = require('../models/paymentModel');
const { PAYHERE_MERCHANT_ID } = require('../config/env');

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
        amount: orderDetails.OrderTotal.toFixed(2),
        currency: 'LKR',
        sandbox: '1'
    });

    return {
        TransactionID: tempTransactionId,
        redirectUrl: `https://sandbox.payhere.lk/pay/checkout?${params.toString()}`
    };
};

// const initiateStripePayment = async (orderDetails) => {
//     // Call the Stripe API to initiate a payment (example)
//     const response = await axios.post('https://api.stripe.com/v1/charges', {
//         amount: orderDetails.totalAmount * 100, // Amount in cents
//         currency: 'lkr',
//         source: 'tok_visa', // Example token, in real case this comes from frontend
//         description: `Order #${orderDetails.orderId}`,
//     });

//     return response.data;
// };

// Update payment status in the database
const updatePaymentStatus = async (PaymentID, PaymentStatus) => {
    await PaymentModel.updatePaymentStatus(PaymentID, PaymentStatus);
};

module.exports = { initiatePayment, updatePaymentStatus };
