// // services/paymentService.js
// const PaymentModel = require('../models/paymentModel');
// const axios = require('axios');

// // Initiate a payment for an order
// const initiatePayment = async (OrderID, PaymentMethod) => {
//     // Fetch order details to calculate the payment amount
//     const orderDetails = await PaymentModel.getOrderDetails(OrderID);

//     // Integrate with the payment gateway (e.g., PayHere, PayPal)
//     let paymentResponse;
//     switch (PaymentMethod) {
//         case 'PayHere':
//             paymentResponse = await initiatePayHerePayment(orderDetails);
//             break;
//         default:
//             throw new Error('Unsupported payment method');
//     }

//     // Store payment details in the database
//     const paymentData = {
//         orderId,
//         PaymentMethod,
//         PaymentStatus: 'Pending',
//         TransactionID: paymentResponse.TransactionID,
//     };

//     const paymentId = await PaymentModel.createPayment(paymentData);
//     return { paymentId, PaymentStatus: 'Pending', TransactionID: paymentResponse.TransactionID };
// };

// // Helper functions to interact with different payment gateways
// const initiatePayHerePayment = async (orderDetails) => {
//     // Call the PayHere API to initiate a payment (example)
//     const response = await axios.post('https://sandbox.payhere.lk/payments', {
//         amount: orderDetails.totalAmount,
//         currency: 'LKR',
//         return_url: 'http://yourapp.com/payment/success',
//         cancel_url: 'http://yourapp.com/payment/cancel',
//         order_id: orderDetails.OrderID,
//     });

//     return response.data;
// };

// // const initiateStripePayment = async (orderDetails) => {
// //     // Call the Stripe API to initiate a payment (example)
// //     const response = await axios.post('https://api.stripe.com/v1/charges', {
// //         amount: orderDetails.totalAmount * 100, // Amount in cents
// //         currency: 'lkr',
// //         source: 'tok_visa', // Example token, in real case this comes from frontend
// //         description: `Order #${orderDetails.orderId}`,
// //     });

// //     return response.data;
// // };

// // Update payment status in the database
// const updatePaymentStatus = async (PaymentID, PaymentStatus) => {
//     await PaymentModel.updatePaymentStatus(PaymentID, PaymentStatus);
// };

// module.exports = { initiatePayment, updatePaymentStatus };
