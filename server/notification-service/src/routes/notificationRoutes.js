const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/notificationController');
const authMiddleware = require('../middleware/auth');

router.post('/create', NotificationController.createNotification);
router.post('/send-email', NotificationController.sendEmailNotification);
router.post('/send-sms', NotificationController.sendSMSNotification);
router.get('/my', authMiddleware, NotificationController.getMyNotifications);

module.exports = router;