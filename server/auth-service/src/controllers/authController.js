const authService = require('../services/authService');
const UserModel = require('../models/userModel');

// Register new user
const register = async (req, res) => {
    const { firstname, lastname, email, password, phone, role } = req.body;

    if (!firstname || !lastname || !email || !password || !role) {
        return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    try {
        await authService.register({ firstname, lastname, email, password, phone, role });
        res.status(201).json({ message: 'User registered successfully.' });
    } catch (err) {
        res.status(500).json({ message: 'Registration failed.', error: err.message });
    }
};

// Login existing user
const login = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password.' });
    }

    try {
        const token = await authService.login(email, password);
        res.status(200).json({ message: 'Login successful.', token });
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};

// Get all users (only for Admin)
const getAllUsers = async (req, res) => {
    const { role } = req.user;

    if (role !== 'Admin') {
        return res.status(403).json({ message: 'Access denied. Admin role required.' });
    }

    try {
        const users = await UserModel.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch users.', error: err.message });
    }
};

// Get user by ID (any user or Admin)
const getUserById = async (req, res) => {
    const userId = req.params.id;
    const { role, id } = req.user;

    if (role === 'Admin' || id === userId) {
        try {
            const user = await authService.getById(userId);
            if (!user) {
                return res.status(404).json({ message: 'User not found.' });
            }
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json({ message: 'Error retrieving user.', error: err.message });
        }
    } else {
        res.status(403).json({ message: 'Access denied. Admin role or user own data required.' });
    }
};

// Update user (any user or Admin)
const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { role, id, email } = req.user;

    const { firstname, lastname, email: newEmail, phone, role: newRole } = req.body;
    const userData = { firstname, lastname, email: newEmail, phone, role: newRole };

    if (role === 'Admin' || (role !== 'Admin' && email === newEmail)) {
        try {
            await authService.updateUser(userId, userData);
            res.status(200).json({ message: 'User updated successfully.' });
        } catch (err) {
            res.status(500).json({ message: 'Failed to update user.', error: err.message });
        }
    } else {
        res.status(403).json({ message: 'Access denied. You can only edit your own details or Admin can edit all.' });
    }
};

// Delete user (Admin only)
const deleteUser = async (req, res) => {
    const userId = req.params.id;
    const { role } = req.user;

    if (role === 'Admin') {
        try {
            await authService.deleteUser(userId);
            res.status(200).json({ message: 'User deleted successfully.' });
        } catch (err) {
            res.status(500).json({ message: 'Failed to delete user.', error: err.message });
        }
    } else {
        res.status(403).json({ message: 'Access denied. Admin role required.' });
    }
};

module.exports = { register, login, getAllUsers, getUserById, updateUser, deleteUser };
