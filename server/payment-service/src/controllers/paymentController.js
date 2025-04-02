const PaymentService = require('../services/paymentService');

const initiatePayment = async (req, res) => {
    try {
        const { OrderID, PaymentMethod } = req.body;

        if (!OrderID || !PaymentMethod) {
            return res.status(400).json({ error: 'OrderID and PaymentMethod are required' });
        }

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

const paymentSuccess = async (req, res) => {
    // Handle success callback from PayHere
    console.log('Payment Success:', req.body);
    res.redirect(process.env.FRONTEND_SUCCESS_URL || 'http://localhost:3000/payment/success');
};

const paymentCancelled = async (req, res) => {
    // Handle cancelled payment
    console.log('Payment Cancelled:', req.body);
    res.redirect(process.env.FRONTEND_CANCEL_URL || 'http://localhost:3000/payment/cancel');
};

const paymentNotification = async (req, res) => {
    try {
        const notificationData = req.body;
        console.log('Payment Notification Received:', notificationData);
        
        await PaymentService.processPaymentNotification(notificationData);
        
        // Always respond with 200 OK to PayHere
        res.status(200).send('OK');
    } catch (err) {
        console.error('Payment Notification Error:', err);
        // Still send 200 to PayHere to prevent retries
        res.status(200).send('OK');
    }
};

const updatePaymentStatus = async (req, res) => {
    try {
        const { PaymentID, PaymentStatus } = req.body;

        if (!PaymentID || !PaymentStatus) {
            return res.status(400).json({ error: 'PaymentID and PaymentStatus are required' });
        }

        await PaymentService.updatePaymentStatus(PaymentID, PaymentStatus);

        res.status(200).json({ message: 'Payment status updated successfully' });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

module.exports = { 
    initiatePayment, 
    updatePaymentStatus, 
    paymentSuccess,
    paymentCancelled,
    paymentNotification
};