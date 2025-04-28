// repository/notificationRepository.js
const pool = require('../config/db');

const NotificationRepository = {
    // Create a new notification record (primarily for InApp channel)
    create: async (userId, message, channel = 'InApp', type = null) => {
        // Ensure userId is treated as a number if your DB expects INT
        const userIdInt = parseInt(userId, 10);
         if (isNaN(userIdInt)) {
            console.error(`Invalid UserID provided to create notification: ${userId}`);
             throw new Error('Invalid User ID');
         }
        
        const query = `
          INSERT INTO Notifications (UserID, Message, Channel, NotificationType)
          VALUES (?, ?, ?, ?)
        `;
        // Use type ?? null for safety with potential undefined type
        const [result] = await pool.execute(query, [userIdInt, message, channel, type ?? null]);
        console.log(`Notification created in DB: ID ${result.insertId}, UserID ${userIdInt}, Channel ${channel}`);
        return result.insertId; // Return the ID of the new record
    },

    // Get notifications for a specific user
    getByUserId: async (userId) => {
         const userIdInt = parseInt(userId, 10);
         if (isNaN(userIdInt)) {
            console.error(`Invalid UserID provided to get notifications: ${userId}`);
             return []; // Return empty array for invalid ID
         }
        const query = 'SELECT * FROM Notifications WHERE UserID = ? ORDER BY NotificationDate DESC';
        const [rows] = await pool.execute(query, [userIdInt]);
         console.log(`Fetched ${rows.length} notifications for UserID ${userIdInt}`);
        return rows; // Returns an array of notification objects
    },

    // ADDED: Mark a specific notification as read by ID
    markAsRead: async (notificationId, userId) => { // Added userId for security check
        const notificationIdInt = parseInt(notificationId, 10);
        const userIdInt = parseInt(userId, 10);
         if (isNaN(notificationIdInt) || isNaN(userIdInt)) {
             console.error(`Invalid ID(s) provided to markAsRead: notificationId=${notificationId}, userId=${userId}`);
             throw new Error('Invalid ID provided');
         }
        // Ensure the notification belongs to the user before marking as read
        const query = 'UPDATE Notifications SET IsRead = TRUE WHERE NotificationID = ? AND UserID = ? AND IsRead = FALSE';
        const [result] = await pool.execute(query, [notificationIdInt, userIdInt]);
        console.log(`Marked notification #${notificationIdInt} as read for UserID ${userIdInt}. Affected rows: ${result.affectedRows}`);
        return result.affectedRows > 0; // Return true if a row was updated
    },

    // ADDED: Mark all unread notifications for a user as read
    markAllAsRead: async (userId) => {
         const userIdInt = parseInt(userId, 10);
         if (isNaN(userIdInt)) {
            console.error(`Invalid UserID provided to markAllAsRead: ${userId}`);
             throw new Error('Invalid User ID');
         }
        const query = 'UPDATE Notifications SET IsRead = TRUE WHERE UserID = ? AND IsRead = FALSE';
        const [result] = await pool.execute(query, [userIdInt]);
        console.log(`Marked ${result.affectedRows} notifications as read for UserID ${userIdInt}`);
        return result.affectedRows; // Return number of affected rows
    }
};

module.exports = NotificationRepository;
