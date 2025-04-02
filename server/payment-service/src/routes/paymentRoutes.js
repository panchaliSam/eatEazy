<<<<<<< HEAD
const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/paymentController');

// Route to initiate payment
router.post('/initiate', PaymentController.initiatePayment);

// Routes for PayHere callbacks
router.post('/success', PaymentController.paymentSuccess);
router.post('/cancel', PaymentController.paymentCancelled);
router.post('/notify', PaymentController.paymentNotification);

// Route to manually update payment status (admin)
router.put('/status', PaymentController.updatePaymentStatus);

module.exports = router;
=======
const express = require('express');
const router = express.Router();
const PaymentController = require('../controllers/paymentController');

// Route to initiate payment
router.post('/initiate', PaymentController.initiatePayment);

// Routes for PayHere callbacks
router.post('/success', PaymentController.paymentSuccess);
router.post('/cancel', PaymentController.paymentCancelled);
router.post('/notify', PaymentController.paymentNotification);

// Route to manually update payment status (admin)
router.put('/status', PaymentController.updatePaymentStatus);

module.exports = router;
>>>>>>> 3d4f402a39c80d79e1809a4c29ce3c43474529c0
