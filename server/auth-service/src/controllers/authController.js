const authService = require('../services/authService');
const UserModel = require('../models/userModel');

// Register new user
const register = (req, res) => {
    const { firstname, lastname, email, password, phone, role } = req.body;

    if (!firstname || !lastname || !email || !password || !role) {
        return res.status(400).json({ message: 'Please provide all required fields.' });
    }

    authService.register({ firstname, lastname, email, password, phone, role }, (err, result) => {
        if (err) {
            return res.status(500).json({ message: 'Registration failed.', error: err });
        }
        res.status(201).json({ message: 'User registered successfully.' });
    });
};

// Login existing user
const login = (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ message: 'Please provide email and password.' });
    }

    authService.login(email, password, (err, token) => {
        if (err) {
            return res.status(401).json({ message: err });
        }
        res.status(200).json({ message: 'Login successful.', token });
    });
};

// Get all users (only for Admin)
const getAllUsers = (req, res) => {
    const { role } = req.user;

    if (role !== 'Admin') {
        return res.status(403).json({ message: 'Access denied. Admin role required.' });
    }

    UserModel.getAllUsers((err, users) => {
        if (err) {
            return res.status(500).json({ message: 'Failed to fetch users.', error: err });
        }
        res.status(200).json(users);
    });
};

// Get user by ID (any user or Admin)
const getUserById = (req, res) => {
    const userId = req.params.id;
    const { role, id } = req.user;

    if (role === 'Admin' || id === userId) {
        authService.getById(userId, (err, user) => {
            if (err || !user) {
                return res.status(404).json({ message: 'User not found.' });
            }
            res.status(200).json(user);
        });
    } else {
        res.status(403).json({ message: 'Access denied. Admin role or user own data required.' });
    }
};

// Update user (any user or Admin)
const updateUser = (req, res) => {
    const userId = req.params.id;
    const { role, id, email } = req.user;

    const { firstname, lastname, email: newEmail, phone, role: newRole } = req.body;
    const userData = { firstname, lastname, email: newEmail, phone, role: newRole };

    if (role === 'Admin' || (role !== 'Admin' && email === newEmail)) {
        authService.updateUser(userId, userData, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to update user.', error: err });
            }
            res.status(200).json({ message: 'User updated successfully.' });
        });
    } else {
        res.status(403).json({ message: 'Access denied. You can only edit your own details or Admin can edit all.' });
    }
};

// Delete user (Admin only)
const deleteUser = (req, res) => {
    const userId = req.params.id;
    const { role } = req.user;

    if (role === 'Admin') {
        authService.deleteUser(userId, (err) => {
            if (err) {
                return res.status(500).json({ message: 'Failed to delete user.', error: err });
            }
            res.status(200).json({ message: 'User deleted successfully.' });
        });
    } else {
        res.status(403).json({ message: 'Access denied. Admin role required.' });
    }
};

module.exports = { register, login, getAllUsers, getUserById, updateUser, deleteUser };
