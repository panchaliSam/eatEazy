const pool = require('../config/db');

const NotificationRepository = {
    create: async (userId, message) => {
        const query = 'INSERT INTO Notifications (UserID, Message) VALUES (?, ?)';
        const [result] = await pool.execute(query, [userId, message]);
        return result.insertId;
    },

    getByUserId: async (userId) => {
        const query = 'SELECT * FROM Notifications WHERE UserID = ? ORDER BY NotificationDate DESC';
        const [rows] = await pool.execute(query, [userId]);
        return rows;
    }
};

module.exports = NotificationRepository;
