// controllers/paymentController.js
const PaymentService = require('../services/paymentService');

// Initiate a payment for an order
const initiatePayment = async (req, res) => {
    try {
        const { orderId, paymentMethod } = req.body;

        // Call the service to initiate the payment
        const paymentDetails = await PaymentService.initiatePayment(orderId, paymentMethod);

        res.status(201).json({ message: 'Payment initiated successfully', paymentDetails });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Handle payment status update
const updatePaymentStatus = async (req, res) => {
    try {
        const { paymentId, status } = req.body;

        // Call the service to update the payment status
        await PaymentService.updatePaymentStatus(paymentId, status);

        res.status(200).json({ message: 'Payment status updated successfully' });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

module.exports = { initiatePayment, updatePaymentStatus };
