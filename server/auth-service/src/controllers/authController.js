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

module.exports = { register, login, getAllUsers };
