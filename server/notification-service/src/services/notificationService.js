const NotificationModel = require("../models/notificationModel");
const nodemailer = require("nodemailer");
const axios = require("axios");
require("dotenv").config();
const twilio = require("twilio");


// Email setup (Gmail via Nodemailer)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Create a Twilio client using environment credentials
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const NotificationService = {
  sendEmail: async (email, subject, message) => {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: subject,
      text: message,
    });
  },

  sendSMS: async (phone, message) => {
    try {
      const response = await twilioClient.messages.create({
        body: message,
        from: process.env.TWILIO_MESSAGING_SERVICE_SID,  // Use your Twilio phone number from .env
        to: phone,  // Ensure this is in E.164 format (e.g., +94768501850)
      });
      console.log("SMS sent successfully! SID:", response.sid);
    } catch (error) {
      console.error("Error sending SMS via Twilio:", error);
      throw new Error("Failed to send SMS");
    }
  },

  createNotification: async (userId, message) => {
    return await NotificationModel.createNotification(userId, message);
  },
};

module.exports = NotificationService;
