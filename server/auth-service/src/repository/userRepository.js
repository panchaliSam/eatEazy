const pool = require('../config/db');

const UserRepository = {
    create: async (userData) => {
        const { firstname, lastname, email, passwordHash, phone, role } = userData;
        const query = 'INSERT INTO Users (Firstname, Lastname, Email, PasswordHash, Phone, Role) VALUES (?, ?, ?, ?, ?, ?)';
        const [result] = await pool.execute(query, [firstname, lastname, email, passwordHash, phone, role]);
        return result;
    },

    findByEmail: async (email) => {
        const query = 'SELECT * FROM Users WHERE Email = ?';
        const [rows] = await pool.execute(query, [email]);
        return rows;
    },

    findById: async (id) => {
        const query = 'SELECT * FROM Users WHERE UserID = ?';
        const [rows] = await pool.execute(query, [id]);
        return rows;
    },

    getAllUsers: async () => {
        const query = 'SELECT UserID, Firstname, Lastname, Email, Phone, Role FROM Users';
        const [rows] = await pool.execute(query);
        return rows;
    },

    deleteById: async (id) => {
        const query = 'DELETE FROM Users WHERE UserID = ?';
        const [result] = await pool.execute(query, [id]);
        return result;
    },

    updateById: async (id, userData) => {
        const { firstname, lastname, email, phone, role } = userData;
        const query = 'UPDATE Users SET Firstname = ?, Lastname = ?, Email = ?, Phone = ?, Role = ? WHERE UserID = ?';
        const [result] = await pool.execute(query, [firstname, lastname, email, phone, role, id]);
        return result;
    },
};

module.exports = UserRepository;
