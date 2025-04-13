const NotificationService = require('../services/notificationService');

const createNotification = async (req, res) => {
    try {
        const { userId, message, channel, type } = req.body;
        await NotificationService.createNotification(userId, message, channel, type);
        res.status(201).json({ message: 'Notification created successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const sendEmailNotification = async (req, res) => {
    try {
        const { email, userId, type, data } = req.body;
        data.userId = userId;
        await NotificationService.sendEmail(email, type, data);
        res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const sendSMSNotification = async (req, res) => {
    try {
        const { phone, userId, type, data } = req.body;
        data.userId = userId;
        await NotificationService.sendSMS(phone, type, data);
        res.status(200).json({ message: 'SMS sent successfully' });
    } catch (error) {
        console.error('SMS Error:', error.message);
        res.status(500).json({ error: 'Failed to send SMS' });
    }
};

const getMyNotifications = async (req, res) => {
    try {
        const userId = req.user.userId; // comes from JWT
        const notifications = await NotificationService.getNotificationsByUserId(userId);
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createNotification,
    sendEmailNotification,
    sendSMSNotification,
    getMyNotifications
};