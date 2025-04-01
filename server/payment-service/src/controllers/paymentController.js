// controllers/paymentController.js
const PaymentService = require('../services/paymentService');
const md5 = require('md5');
const { PAYHERE_MERCHANT_SECRET } = require('../config/env');

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

const handlePaymentNotification = async (req, res) => {
    try {
        const payload = req.body;
        
        // Verify the payment hash
        const generatedHash = createPaymentHash(
            payload.merchant_id,
            payload.order_id,
            payload.payhere_amount,
            payload.payhere_currency,
            payload.status_code
        );

        if (generatedHash !== payload.md5sig) {
            return res.status(400).json({ error: 'Invalid signature' });
        }

        // Update payment status based on PayHere response
        if (payload.status_code === 2) {
            await PaymentService.updatePaymentStatus(payload.order_id, 'Completed');
        } else if (payload.status_code === 0) {
            await PaymentService.updatePaymentStatus(payload.order_id, 'Pending');
        } else if (payload.status_code === -1) {
            await PaymentService.updatePaymentStatus(payload.order_id, 'Failed');
        }

        res.status(200).send('OK');
    } catch (err) {
        console.error('IPN Error:', err);
        res.status(500).send('Error');
    }
};

const createPaymentHash = (merchant_id, order_id, amount, currency, status_code) => {
    const data = `${merchant_id}${order_id}${amount}${currency}${status_code}${PAYHERE_MERCHANT_SECRET}`;
    return md5(data).toUpperCase();
};

module.exports = { initiatePayment, updatePaymentStatus, handlePaymentNotification };
