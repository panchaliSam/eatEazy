// src/routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notificationController');
const { authenticateToken } = require('../middleware/authMiddleware');
const serviceAuth = require('../middleware/serviceAuth');

// Service-to-service routes (protected by serviceAuth middleware)
router.post('/create', serviceAuth, notificationController.createNotification);
router.post('/send-email', serviceAuth, notificationController.sendEmailNotification);
router.post('/send-sms', serviceAuth, notificationController.sendSMSNotification);

// NEW SERVICE INTEGRATION ROUTES - all protected by serviceAuth
router.post('/service/order', serviceAuth, notificationController.processOrderNotification);
router.post('/service/payment', serviceAuth, notificationController.processPaymentNotification);
router.post('/service/delivery', serviceAuth, notificationController.processDeliveryNotification);
router.post('/service/restaurant', serviceAuth, notificationController.processRestaurantNotification);

// User-facing routes (protected by authenticateToken middleware)
router.get('/myNotifications', authenticateToken, notificationController.getMyNotifications);
router.put('/mark-all-read', authenticateToken, notificationController.markAllNotificationsAsRead);
router.put('/:notificationId/read', authenticateToken, notificationController.markNotificationAsRead);

// Health check endpoint
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    service: 'Notification Service',
    timestamp: new Date().toISOString()
  });
});

module.exports = router;
