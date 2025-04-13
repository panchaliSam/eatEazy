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

  // SMS notification using Text.lk
  sendSMS: async (phone, type, data) => {
    const text = templates.smsTemplates[type](data);
    try {
      const response = await axios.post('https://textlk.com/api/v3/send-sms', {
        api_key: process.env.TEXTLK_API_KEY,
        sender_id: process.env.TEXTLK_SENDER_ID,
        message: text,
        to: phone,
      });

      if (response.data.status !== 'SUCCESS') {
        throw new Error(`Text.lk Error: ${response.data.message}`);
      }

      await NotificationModel.createNotification(data.userId, text, "SMS", type);
    } catch (error) {
      console.error("Error sending SMS via Text.lk:", error.message || error);
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
