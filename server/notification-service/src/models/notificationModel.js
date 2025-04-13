const NotificationRepository = require('../repository/notificationRepository');

const NotificationModel = {
    createNotification: async (userId, message, channel = 'InApp', type = null) => {
        return await NotificationRepository.create(userId, message, channel, type);
    },

    getNotificationsByUserId: async (userId) => {
        return await NotificationRepository.getByUserId(userId);
    }
};

module.exports = NotificationModel;