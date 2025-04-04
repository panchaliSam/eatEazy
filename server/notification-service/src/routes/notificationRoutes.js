const express = require('express');
const router = express.Router();
const NotificationController = require('../controllers/notificationController');

router.post('/create', NotificationController.createNotification);
router.post('/send-email', NotificationController.sendEmailNotification);
router.post('/send-sms', NotificationController.sendSMSNotification);

module.exports = router;
