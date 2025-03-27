const db = require('../config/db');

const UserRepository = {
    create: (userData, callback) => {
        const { firstname, lastname, email, passwordHash, phone, role } = userData;
        const query = 'INSERT INTO Users (Firstname, Lastname, Email, PasswordHash, Phone, Role) VALUES (?, ?, ?, ?, ?, ?)';
        db.query(query, [firstname, lastname, email, passwordHash, phone, role], callback);
    },

    findByEmail: (email, callback) => {
        const query = 'SELECT * FROM Users WHERE Email = ?';
        db.query(query, [email], callback);
    },

    findById: (id, callback) => {
        const query = 'SELECT * FROM Users WHERE UserID = ?';
        db.query(query, [id], callback);
    },

    getAllUsers: (callback) => {
        const query = 'SELECT UserID, Firstname, Lastname, Email, Phone, Role FROM Users';
        db.query(query, callback);
    },

    deleteById: (id, callback) => {
        const query = 'DELETE FROM Users WHERE UserID = ?';
        db.query(query, [id], callback);
    },

    updateById: (id, userData, callback) => {
        const { firstname, lastname, email, phone, role } = userData;
        const query = 'UPDATE Users SET Firstname = ?, Lastname = ?, Email = ?, Phone = ?, Role = ? WHERE UserID = ?';
        db.query(query, [firstname, lastname, email, phone, role, id], callback);
    },
};

module.exports = UserRepository;
