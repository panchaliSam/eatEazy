// controllers/paymentController.js
const PaymentService = require('../services/paymentService');

const initiatePayment = async (req, res) => {
    try {
        const { OrderID, PaymentMethod } = req.body;
        const paymentDetails = await PaymentService.initiatePayment(OrderID, PaymentMethod);
        
        res.status(201).json({ 
            message: 'Payment initiated successfully', 
            paymentDetails 
        });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Handle payment status update
const updatePaymentStatus = async (req, res) => {
    try {
        const { PaymentID, PaymentStatus } = req.body;

        // Call the service to update the payment status
        await PaymentService.updatePaymentStatus(PaymentID, PaymentStatus);

        res.status(200).json({ message: 'Payment status updated successfully' });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

const handlePaymentNotification = async (req, res) => {
    try {
        const payload = req.body;
        
        // Verify the payment hash
        const generatedHash = createPaymentHash(
            payload.merchant_id,
            payload.order_id,
            payload.payhere_amount,
            payload.payhere_currency,
            payload.status_code,
            PAYHERE_MERCHANT_SECRET
        );

        if (generatedHash !== payload.md5sig) {
            return res.status(400).json({ error: 'Invalid signature' });
        }

        // Update payment status
        if (payload.status_code === 2) { // PayHere success code
            await PaymentService.updatePaymentStatus(
                payload.order_id, 
                'Completed'
            );
        }

        res.status(200).send('OK');
    } catch (err) {
        console.error('IPN Error:', err);
        res.status(500).send('Error');
    }
};

// Helper function
const createPaymentHash = (...params) => {
    const hash = params.slice(0, 5).join('') + 
                md5(PAYHERE_MERCHANT_SECRET).toUpperCase();
    return md5(hash).toUpperCase();
};

module.exports = { initiatePayment, updatePaymentStatus, handlePaymentNotification, createPaymentHash };
