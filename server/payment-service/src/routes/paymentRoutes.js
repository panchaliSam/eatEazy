// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/paymentController');
const { authenticateToken } = require('../middleware/authMiddleware');
require

// Route to initiate payment
router.post('/initiate', authenticateToken, PaymentController.initiatePayment);

// Routes for PayHere callbacks
router.post('/notify', PaymentController.handlePayHereNotify);

// Route to manually update payment status (admin)
router.put('/status', authenticateToken, PaymentController.updatePaymentStatus);

// Route to get payment details
router.get('/:PaymentID', authenticateToken, PaymentController.getPaymentById);

// Route to get payments by order ID
router.get('/order/:OrderID', authenticateToken, PaymentController.getPaymentsByOrderId);

// // Route to get order details from the order service
// router.get('/orders/:OrderID',authenticateToken,PaymentController.getOrderDetailsFromService)

module.exports = router;