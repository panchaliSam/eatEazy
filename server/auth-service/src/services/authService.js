const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const { JWT_SECRET, JWT_EXPIRATION } = require('../config/env');

const ALLOWED_ROLES = ['Admin', 'Restaurant', 'Customer', 'DeliveryPerson'];

// Register a new user
const register = (userData, callback) => {
    const { firstname, lastname, email, password, phone, role } = userData;

    if (!ALLOWED_ROLES.includes(role)) {
        return callback('Invalid role. Allowed roles are: Admin, Restaurant, Customer, DeliveryPerson.');
    }

    UserModel.findUserByEmail(email, (err, results) => {
        if (err) return callback(err);

        if (results.length > 0) {
            return callback('Email is already registered.');
        }

        bcrypt.hash(password, 10, (err, passwordHash) => {
            if (err) return callback(err);

            const newUser = { firstname, lastname, email, passwordHash, phone, role };
            UserModel.createUser(newUser, callback);
        });
    });
};

// Login existing user
const login = (email, password, callback) => {
    UserModel.findUserByEmail(email, (err, results) => {
        if (err) return callback(err);

        if (results.length === 0) {
            return callback('No user found with this email.');
        }

        const user = results[0];
        bcrypt.compare(password, user.PasswordHash, (err, isMatch) => {
            if (err) return callback(err);

            if (!isMatch) {
                return callback('Invalid password.');
            }

            const token = jwt.sign({ id: user.UserID, email: user.Email, role: user.Role }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
            callback(null, token);
        });
    });
};

module.exports = { register, login };
