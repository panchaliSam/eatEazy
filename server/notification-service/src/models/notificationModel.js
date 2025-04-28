// models/notificationModel.js
const NotificationRepository = require('../repository/notificationRepository');

const NotificationModel = {
    createNotification: async (userId, message, channel = 'InApp', type = null) => {
        // Delegate creation to the repository
        return await NotificationRepository.create(userId, message, channel, type);
    },

    getNotificationsByUserId: async (userId) => {
        // Delegate fetching to the repository
        return await NotificationRepository.getByUserId(userId);
    },

    // ADDED: Mark a specific notification as read
    markAsRead: async (notificationId, userId) => {
        return await NotificationRepository.markAsRead(notificationId, userId);
    },

    // ADDED: Mark all unread notifications for a user as read
    markAllAsRead: async (userId) => {
        return await NotificationRepository.markAllAsRead(userId);
    }
};

module.exports = NotificationModel;
