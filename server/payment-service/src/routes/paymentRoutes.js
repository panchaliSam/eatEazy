// routes/paymentRoutes.js
const express = require('express');
const router = express.Router();
const { initiatePayment, updatePaymentStatus } = require('../controllers/paymentController');
const { authenticateToken } = require('../middleware/authMiddleware');

// Initiate payment for an order
router.post('/initiate', authenticateToken, initiatePayment);

// Update payment status (e.g., after payment is completed or failed)
router.post('/update-status', authenticateToken, updatePaymentStatus);

module.exports = router;
