const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const { 
    initiatePayment, 
    updatePaymentStatus,
    handlePaymentNotification 
} = require('../controllers/paymentController');

// Middleware for input validation
const validatePaymentRequest = [
    body('OrderID').notEmpty().withMessage('OrderID is required'),
    body('PaymentMethod').notEmpty().withMessage('PaymentMethod is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Middleware for validating payment status update request
const validatePaymentStatusUpdate = [
    body('PaymentID').notEmpty().withMessage('PaymentID is required'),
    body('PaymentStatus').notEmpty().withMessage('PaymentStatus is required'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    }
];

// Route to initiate a payment
router.post('/initiate', validatePaymentRequest, initiatePayment);

// Route to update payment status
router.post('/update-status', validatePaymentStatusUpdate, updatePaymentStatus);

// Route to handle payment notifications (IPN)
router.post('/notify', handlePaymentNotification);

module.exports = router;
