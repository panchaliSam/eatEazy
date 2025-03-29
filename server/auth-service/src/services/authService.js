const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const { JWT_SECRET, JWT_EXPIRATION } = require('../config/env');

const ALLOWED_ROLES = ['Admin', 'Restaurant', 'Customer', 'DeliveryPerson'];

// Register a new user
const register = async (userData) => {
    const { firstname, lastname, email, password, phone, role } = userData;

    if (!ALLOWED_ROLES.includes(role)) {
        throw new Error('Invalid role. Allowed roles are: Admin, Restaurant, Customer, DeliveryPerson.');
    }

    const existingUser = await UserModel.findUserByEmail(email);
    if (existingUser.length > 0) {
        throw new Error('Email is already registered.');
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = { firstname, lastname, email, passwordHash, phone, role };
    await UserModel.createUser(newUser);
};

// Login existing user
const login = async (email, password) => {
    const results = await UserModel.findUserByEmail(email);
    if (results.length === 0) {
        throw new Error('No user found with this email.');
    }

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.PasswordHash);
    if (!isMatch) {
        throw new Error('Invalid password.');
    }

    const token = jwt.sign({ id: user.UserID, email: user.Email, role: user.Role }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    return token;
};

//Get all users
const getAllUsers = async () => {
    return await UserModel.getAllUsers();
}

// Get user by ID
const getById = async (id) => {
    return await UserModel.findUserById(id);
};

// Delete user (Admin only)
const deleteUser = async (id) => {
    return await UserModel.deleteUserById(id);
};

// Update user (Any user or Admin)
const updateUser = async (id, userData) => {
    return await UserModel.updateUserById(id, userData);
};

module.exports = { register, login, getAllUsers, getById, deleteUser, updateUser };
