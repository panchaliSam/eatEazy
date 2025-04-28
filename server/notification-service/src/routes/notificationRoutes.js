// routes/notificationRoutes.js
const express = require('express');
const router = express.Router();
const { // Import all necessary controller functions
    createNotification,
    sendEmailNotification,
    sendSMSNotification,
    getMyNotifications,
    markNotificationAsRead, // ADDED
    markAllNotificationsAsRead // ADDED
  } = require('../controllers/notificationController');

  const { authenticateToken } = require('../middleware/authMiddleware'); // User auth
const serviceAuth = require('../middleware/serviceAuth'); // Service auth


// Service-to-service routes (protected by serviceAuth middleware)
// Used by other backend services (like Order Service, Payment Service) to request notifications
router.post('/create', serviceAuth, createNotification); // To create In-App notifications in DB
router.post('/send-email', serviceAuth, sendEmailNotification); // To request sending emails
router.post('/send-sms', serviceAuth, sendSMSNotification); // To request sending SMS

// User-facing routes (protected by authenticateToken middleware)
// Used by frontend clients (customer, delivery person)
router.get('/myNotifications', authenticateToken, getMyNotifications); // Get notifications for the logged-in user

// ADDED: Routes to mark notifications as read
// PUT request is appropriate for updating a resource (the notification's IsRead status)
router.put('/mark-all-read', authenticateToken, markAllNotificationsAsRead); // Mark all for user as read
router.put('/:notificationId/read', authenticateToken, markNotificationAsRead); // Mark a specific one as read

// Add this route to the notification routes
router.get('/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    service: 'Notification Service',
    timestamp: new Date().toISOString()
  });
});


module.exports = router;
