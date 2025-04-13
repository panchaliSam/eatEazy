const pool = require('../config/db');

const NotificationRepository = {
    create: async (userId, message, channel = 'InApp', type = null) => {
        const query = `INSERT INTO Notifications (UserID, Message, Channel, NotificationType) VALUES (?, ?, ?, ?)`;
        const [result] = await pool.execute(query, [userId, message, channel, type]);
        return result.insertId;
    },

    getByUserId: async (userId) => {
        const query = 'SELECT * FROM Notifications WHERE UserID = ? ORDER BY NotificationDate DESC';
        const [rows] = await pool.execute(query, [userId]);
        return rows;
    }
};

module.exports = NotificationRepository;