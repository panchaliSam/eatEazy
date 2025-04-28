// services/notificationService.js
const NotificationModel = require("../models/notificationModel");
const nodemailer = require("nodemailer");
const axios = require("axios"); // Used for calling external APIs (FitSMS, User Service)
const templates = require("./notificationTemplates"); // Assuming correct path for templates
require("dotenv").config(); // Ensure env variables are loaded

// Import SERVICE_API_KEY and API_GATEWAY_URL from env
const { SERVICE_API_KEY, API_GATEWAY_URL } = require('../config/env');
// Assuming USER_SERVICE_URL is also defined in Notification Service's .env if not using Gateway
const USER_SERVICE_URL = process.env.USER_SERVICE_URL || 'http://localhost:4001'; // Default if not set


// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail", // Or other service/host details
  auth: {
    user: process.env.EMAIL_USER, // Your Gmail address from env
    pass: process.env.EMAIL_PASS, // Your Gmail App Password from env
  },
  // Add security options if needed, e.g., TLS config
});

// ADDED: Helper function to fetch user details (email, phone)
// This assumes you have a User Service with an endpoint like /users/:userId
// protected by SERVICE_API_KEY.
const fetchUserDetails = async (userId) => {
    // Ensure userId is valid
    const userIdInt = parseInt(userId, 10);
    if (isNaN(userIdInt)) {
        console.error(`Invalid UserID provided to fetchUserDetails: ${userId}`);
        throw new Error('Invalid User ID for fetching details.');
    }

    // Use API Gateway URL or direct User Service URL
    const userServiceUrl = API_GATEWAY_URL || USER_SERVICE_URL; 

    try {
        console.log(`Attempting to fetch user details for UserID ${userIdInt} from ${userServiceUrl}/users/${userIdInt}`);
        const response = await axios.get(`${userServiceUrl}/users/${userIdInt}`, {
            headers: {
                // Authentication with User Service using SERVICE_API_KEY
                // The User Service's auth middleware needs to accept this!
                'Authorization': `Bearer ${SERVICE_API_KEY}`, 
                'Content-Type': 'application/json',
            },
            timeout: 5000 // Add a timeout
        });

        if (response.status >= 200 && response.status < 300 && response.data) {
            console.log(`Successfully fetched user details for UserID ${userIdInt}.`);
             // Assuming the User Service response data contains user details like { UserID, Email, Phone, Firstname, Lastname, ... }
            return response.data;
        } else {
            console.error(`User service returned non-success status ${response.status} or empty data for UserID ${userIdInt}.`, response.data);
            throw new Error(`User service returned status ${response.status}`);
        }

    } catch (error) {
         const errorMessage = error.response?.data?.message || error.message;
        console.error(`Failed to fetch user details for UserID ${userIdInt}: ${errorMessage}`);
         // Check for 404 explicitly if needed
         if (axios.isAxiosError(error) && error.response?.status === 404) {
             throw new Error(`User with ID ${userIdInt} not found in User Service.`);
         }
        throw new Error(`Failed to fetch user details: ${errorMessage}`); // Re-throw generic error
    }
};


// Define the NotificationService object
const NotificationService = { // This declaration is correct

  // Email notification - MODIFIED: Removed 'const'
  sendEmail: async (email, userId, type, data) => { 
    // Validate email and type
    if (!email || typeof type !== 'string' || !templates.emailTemplates[type]) {
        console.error(`Invalid input for sendEmail: email=${email}, type=${type}. Type must be a valid string template key.`);
        throw new Error("Invalid input or notification type for email.");
    }
    try {
        const { subject, text } = templates.emailTemplates[type](data); // Use template key

        console.log(`Attempting to send email to ${email} (UserID ${userId}) with subject: "${subject}"`);

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: email,
            subject: subject,
            text: text,
        };

        const info = await transporter.sendMail(mailOptions);

        console.log(`Email sent successfully to ${email} (UserID ${userId}). MessageId: ${info.messageId}`);

        // As assumed, not logging all sent emails/SMS in DB
        // If needed, re-add NotificationModel.createNotification(userId, text, "Email", type);

        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error(`Error sending email (type: ${type}) to ${email}:`, error.message);
        if (error.response) console.error("Email Service Response:", error.response.data);
        throw new Error(`Failed to send email: ${error.message}`);
    }
  },

  // SMS notification using FitSMS - MODIFIED: Removed 'const'
  sendSMS: async (phone, userId, type, data) => { 
    try {
      // Validate phone and type
      if (!phone || typeof type !== 'string' || !templates.smsTemplates[type]) {
           console.error(`Invalid input for sendSMS: phone=${phone}, type=${type}. Type must be a valid string template key.`);
        throw new Error(`Invalid input or notification type for SMS: ${type}`);
      }

      const text = templates.smsTemplates[type](data); // Use template key

       console.log(`Attempting to send SMS to ${phone} (UserID ${userId}) with message: "${text.substring(0, Math.min(text.length, 50))}..."`); // Safer substring
      
      const response = await axios.post(
        'https://app.fitsms.lk/api/v3/sms/send', // FitSMS API endpoint
        {
          sender_id: process.env.FITSMS_SENDER_ID,
          type: "plain", 
          message: text,
          recipient: phone,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.FITSMS_API_KEY}`, // FitSMS API Key in Auth header
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          timeout: 5000
        }
      );

      if (response.data && response.data.status !== 'SUCCESS') {
         console.error(`FitSMS API returned non-SUCCESS status:`, response.data);
        throw new Error(`FitSMS Error: ${response.data.message || JSON.stringify(response.data)}`);
      }

      console.log(`SMS sent successfully to ${phone} (UserID ${userId}). FitSMS Response:`, response.data);

      // As assumed, not logging all sent emails/SMS in DB
      // If needed, re-add NotificationModel.createNotification(userId, text, "SMS", type);

      return { success: true, data: response.data };
    } catch (error) {
      console.error(`Error sending SMS (type: ${type}) to ${phone} (UserID ${userId}):`, error.message);
      if (error.response) {
        console.error("FitSMS Response data:", error.response.data);
        console.error("FitSMS Response status:", error.response.status);
      }
      throw new Error("Failed to send SMS"); // Generic error for caller
    }
  },

  // In-app or other notifications - MODIFIED: Removed 'const'
  createNotification: async (userId, message, channel = 'InApp', type = null) => {
      if (channel !== 'InApp') {
          console.warn(`createNotification service called with non-InApp channel: ${channel}. Skipping DB creation.`);
          return null;
      }
      if (!userId || !message) {
          console.error('Invalid input for createNotification: userId or message missing.');
          throw new Error('User ID and message are required for In-App notification.');
      }
    return await NotificationModel.createNotification(userId, message, channel, type);
  },

  // Fetch notifications by user (primarily for In-App UI) - MODIFIED: Removed 'const'
  getNotificationsByUserId: async (userId) => {
      if (!userId) {
          console.error('UserID is required to fetch notifications.');
          throw new Error('User ID is required.');
      }
       console.log(`Fetching notifications for UserID: ${userId}`);
    return await NotificationModel.getNotificationsByUserId(userId);
  },

   // ADDED: Mark a specific notification as read - MODIFIED: Removed 'const'
   markAsRead: async (notificationId, userId) => { 
        if (!notificationId || !userId) {
             console.error('Notification ID and User ID are required to mark as read.');
            throw new Error('Notification ID and User ID are required.');
        }
        console.log(`Marking notification #${notificationId} as read for UserID ${userId}`);
        const updated = await NotificationModel.markAsRead(notificationId, userId);
        if (!updated) {
             console.warn(`Notification #${notificationId} was not marked as read (already read or not found for user ${userId}).`);
        }
        return { success: true, updated: updated };
   },

   // ADDED: Mark all unread notifications for a user as read - MODIFIED: Removed 'const'
   markAllAsRead: async (userId) => {
       if (!userId) {
            console.error('UserID is required to mark all as read.');
           throw new Error('User ID is required.');
       }
        console.log(`Marking all notifications as read for UserID ${userId}`);
       const affectedRows = await NotificationModel.markAllAsRead(userId);
        console.log(`Marked ${affectedRows} notifications as read for UserID ${userId}.`);
       return { success: true, affectedRows: affectedRows };
   },

   // Expose templates for validation or direct use if needed (optional)
   // emailTemplates: templates.emailTemplates,
   // smsTemplates: templates.smsTemplates,
};

// Export the NotificationService object itself
module.exports = NotificationService;
