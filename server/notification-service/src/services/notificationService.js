const NotificationModel = require("../models/notificationModel");
const nodemailer = require("nodemailer");
const twilio = require("twilio");
const templates = require("./notificationTemplates");
require("dotenv").config();

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const NotificationService = {
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

  sendSMS: async (phone, type, data) => {
    const text = templates.smsTemplates[type](data);
    try {
      const response = await twilioClient.messages.create({
        body: text,
        messagingServiceSid: process.env.TWILIO_MESSAGING_SERVICE_SID,
        to: phone,
      });
      await NotificationModel.createNotification(data.userId, text, "SMS", type);
    } catch (error) {
      console.error("Error sending SMS via Twilio:", error);
      throw new Error("Failed to send SMS");
    }
  },

  createNotification: async (userId, message, channel = 'InApp', type = null) => {
    return await NotificationModel.createNotification(userId, message, channel, type);
  },

  getNotificationsByUserId: async (userId) => {
    return await NotificationModel.getNotificationsByUserId(userId);
  }
};

module.exports = NotificationService;