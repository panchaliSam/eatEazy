const NotificationModel = require("../models/notificationModel");
const nodemailer = require("nodemailer");
const axios = require("axios");
const templates = require("./notificationTemplates");
require("dotenv").config();

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const NotificationService = {
  // Email notification
  sendEmail: async (email, type, data) => {
    const { subject, text } = templates.emailTemplates[type](data);
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject,
      text,
    });
    await NotificationModel.createNotification(data.userId, text, "Email", type);
  },

  // SMS notification using FitSMS
  sendSMS: async (phone, type, data) => {
    try {
      // Check if the type exists in templates
      if (!templates.smsTemplates[type]) {
        throw new Error(`Invalid notification type: ${type}`);
      }

      const text = templates.smsTemplates[type](data);
      
      // Make the API call with proper authentication in headers
      const response = await axios.post(
        'https://app.fitsms.lk/api/v3/sms/send',
        {
          sender_id: process.env.FITSMS_SENDER_ID,
          type: "plain", // This is a FitSMS parameter, not your notification type
          message: text,
          recipient: phone,
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.FITSMS_API_KEY}`,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          }
        }
      );

      if (response.data && response.data.status !== 'SUCCESS') {
        throw new Error(`fitsms.lk Error: ${response.data.message || JSON.stringify(response.data)}`);
      }

      await NotificationModel.createNotification(data.userId, text, "SMS", type);
      return true;
    } catch (error) {
      console.error("Error sending SMS via fitsms.lk:", error.message || error);
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Response status:", error.response.status);
      }
      throw new Error("Failed to send SMS");
    }
  },

  // In-app or other notifications
  createNotification: async (userId, message, channel = 'InApp', type = null) => {
    return await NotificationModel.createNotification(userId, message, channel, type);
  },

  // Fetch notifications by user
  getNotificationsByUserId: async (userId) => {
    return await NotificationModel.getNotificationsByUserId(userId);
  }
};

module.exports = NotificationService;