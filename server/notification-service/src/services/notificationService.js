const NotificationModel = require("../models/notificationModel");
const nodemailer = require("nodemailer");
const axios = require("axios");
require("dotenv").config();

// Email setup (Gmail via Nodemailer)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

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
    const url = `${process.env.INFOBIP_BASE_URL}/sms/2/text/advanced`;
    const headers = {
      "Authorization": `App ${process.env.INFOBIP_API_KEY}`,
      "Content-Type": "application/json",
      "Accept": "application/json",
    };

    const data = {
      messages: [
        {
          from: process.env.INFOBIP_SENDER || "INFOBIP", // Use your configured sender ID here
          to: phone, // Ensure this is in E.164 format (e.g., +94768501850)
          text: message,
        },
      ],
    };

    try {
      const response = await axios.post(url, data, { headers });
      console.log("SMS sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending SMS:", error.response ? error.response.data : error.message);
    }
  },

  createNotification: async (userId, message) => {
    return await NotificationModel.createNotification(userId, message);
  },
};

module.exports = NotificationService;
