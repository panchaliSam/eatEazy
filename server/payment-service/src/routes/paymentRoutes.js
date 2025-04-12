const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/paymentController');
const { authenticateToken } = require('../middleware/authMiddleware');

// Route to initiate payment
router.post('/initiate', authenticateToken,PaymentController.initiatePayment);

// Routes for PayHere callbacks
router.post('/notify', PaymentController.handlePayHereNotify);

// Route to manually update payment status (admin)
router.put('/status',authenticateToken, PaymentController.updatePaymentStatus);

module.exports = router;

