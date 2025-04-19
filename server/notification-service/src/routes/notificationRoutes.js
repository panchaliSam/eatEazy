const express = require('express');
const router = express.Router();
const {
    createNotification,
    sendEmailNotification,
    sendSMSNotification,
    getMyNotifications
  } = require('../controllers/notificationController');
  const { authenticateToken } = require('../middleware/authMiddleware');

const serviceAuth = require('../middleware/serviceAuth');

router.post('/create', serviceAuth, createNotification);
router.post('/send-email', serviceAuth, sendEmailNotification);
router.post('/send-sms', serviceAuth, sendSMSNotification);

// Only /myNotifications remains user‑JWT protected
router.get('/myNotifications', authenticateToken, getMyNotifications);

module.exports = router;