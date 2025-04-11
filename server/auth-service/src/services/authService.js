const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const UserModel = require('../models/userModel');
const RefreshTokenModel = require('../models/refreshTokenModel');
const { JWT_SECRET, JWT_EXPIRATION, REFRESH_TOKEN_EXPIRATION } = require('../config/env');

const ALLOWED_ROLES = ['Admin', 'Restaurant', 'Customer', 'DeliveryPerson'];

// Register a new user
const register = async (userData) => {
    const { firstname, lastname, email, password, phone, role } = userData;

    if (!ALLOWED_ROLES.includes(role)) {
        throw new Error('Invalid role. Allowed roles are: Admin, Restaurant, Customer, DeliveryPerson.');
    }

    const existingUser = await UserModel.findUserByEmail(email);
    if (existingUser) {
        throw new Error('Email is already registered.');
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = { firstname, lastname, email, passwordHash, phone, role };
    await UserModel.createUser(newUser);
};

// Login existing user
const login = async (email, password) => {
    const user = await UserModel.findUserByEmail(email);
    if (!user) {
        throw new Error('No user found with this email.');
    }

    const isMatch = await bcrypt.compare(password, user.PasswordHash);
    if (!isMatch) {
        throw new Error('Invalid password.');
    }

    const accessToken = jwt.sign(
        { id: user.UserID, email: user.Email, role: user.Role },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRATION }
    );

    const refreshToken = jwt.sign(
        { id: user.UserID },
        JWT_SECRET,
        { expiresIn: REFRESH_TOKEN_EXPIRATION }
    );

    const expiresInMilliseconds = 7 * 24 * 60 * 60 * 1000;
    const expiresAt = new Date(Date.now() + expiresInMilliseconds);

    await RefreshTokenModel.createToken({
        token: refreshToken,
        userId: user.UserID,
        expiresAt: expiresAt,
    });

    return { accessToken, refreshToken };
};

// Refresh access token
const refreshAccessToken = async (refreshToken) => {
    const tokenData = await RefreshTokenModel.findByTokenId(refreshToken);

    if (!tokenData || new Date() > new Date(tokenData.expiresAt)) {
        throw new Error('Invalid or expired refresh token.');
    }

    const payload = jwt.verify(refreshToken, JWT_SECRET);

    const accessToken = jwt.sign(
        { id: payload.id, email: payload.email, role: payload.role },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRATION }
    );

    return { accessToken };
};

// Logout
const logout = async (refreshToken) => {
    await RefreshTokenModel.deleteByToken(refreshToken);
};

// Get all users
const getAllUsers = async () => {
    return await UserModel.getAllUsers();
};

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

module.exports = { register, login, refreshAccessToken, logout, getAllUsers, getById, deleteUser, updateUser };
