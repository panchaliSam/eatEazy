const NotificationService = require('../services/notificationService');

const createNotification = async (req, res) => {
    try {
        const { userId, message } = req.body;
        await NotificationService.createNotification(userId, message);
        res.status(201).json({ message: 'Notification created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const sendEmailNotification = async (req, res) => {
    try {
        const { email, subject, message } = req.body;
        await NotificationService.sendEmail(email, subject, message);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const sendSMSNotification = async (req, res) => {
    try {
        const { phone, message } = req.body;
        await NotificationService.sendSMS(phone, message);
        res.status(200).json({ message: 'SMS sent successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createNotification,
    sendEmailNotification,
    sendSMSNotification
};
