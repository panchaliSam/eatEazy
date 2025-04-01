const express = require('express');
const router = express.Router();
const { 
    initiatePayment, 
    updatePaymentStatus,
    handlePaymentNotification 
} = require('../controllers/paymentController');

router.post('/initiate', initiatePayment);
router.post('/update-status', updatePaymentStatus);
router.post('/notify', handlePaymentNotification); // Add IPN handler

module.exports = router;