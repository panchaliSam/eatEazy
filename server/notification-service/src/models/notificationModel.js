const NotificationRepository = require('../repository/notificationRepository');

const NotificationModel = {
    createNotification: async (userId, message) => {
        return await NotificationRepository.create(userId, message);
    },

    getNotificationsByUserId: async (userId) => {
        return await NotificationRepository.getByUserId(userId);
    }
};

module.exports = NotificationModel;
