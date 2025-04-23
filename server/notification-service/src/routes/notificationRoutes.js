const express = require('express');
const router = express.Router();
const {
    createNotification,
    sendEmailNotification,
    sendSMSNotification,
    getMyNotifications
  } = require('../controllers/notificationController');
  const { authenticateToken } = require('../middleware/authMiddleware');

router.post('/create', createNotification);
router.post('/send-email', sendEmailNotification);
router.post('/send-sms', sendSMSNotification);
router.get('/myNotifications',authenticateToken, getMyNotifications);

module.exports = router;