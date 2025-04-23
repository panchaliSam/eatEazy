const authService = require('../services/authService');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env');

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
        const { accessToken, refreshToken } = await authService.login(email, password);
        res.status(200).json({ message: 'Login successful.', accessToken, refreshToken });
    } catch (err) {
        res.status(401).json({ message: err.message });
    }
};

// Refresh access token
const refreshAccessToken = async (refreshToken) => {
    if (!refreshToken) {
        throw new Error('Refresh token is required.');
    }

    try {
        const newAccessToken = await authService.refreshAccessToken(refreshToken);
        return newAccessToken;
    } catch (err) {
        throw new Error('Token refresh failed: ' + err.message);
    }
};


// Logout user
const logout = async (refreshToken) => {
    if (!refreshToken) {
        throw new Error('Refresh token is required.');
    }
    try {
        await refreshAccessToken(refreshToken);

        await authService.logout(refreshToken);

        return { success: true, message: 'Logout successful.' };
    } catch (err) {
        throw new Error('Logout failed: ' + err.message);
    }
};


// Get all users (only for Admin)
const getAllUsers = async (req, res) => {
    const { role } = req.user;

    if (role !== 'Admin') {
        return res.status(403).json({ message: 'Access denied. Admin role required.' });
    }

    try {
        const users = await authService.getAllUsers();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch users.', error: err.message });
    }
};

// Get all delivery persons
const getAllDeliveryPerson = async (req, res) => {
    try {
        const deliveryPersons = await authService.getAllDrivers();
        res.status(200).json(deliveryPersons);
    } catch (err) {
        res.status(500).json({ message: 'Failed to fetch delivery persons.', error: err.message });
    }
};

// Get user by ID (any user or Admin)
const getUserById = async (req, res) => {
    const userId = req.params.id;
    const { role, id } = req.user;

    if (role === 'Admin' || Number(id) === Number(userId)) {
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
        res.status(403).json({ message: 'Access denied.' });
    }
};

// Update user
const updateUser = async (req, res) => {
    const userId = req.params.id;
    const { role, id } = req.user;

    if (role === 'Admin' || Number(id) === Number(userId)) {
        try {
            await authService.updateUser(userId, req.body);
            res.status(200).json({ message: 'User updated successfully.' });
        } catch (err) {
            res.status(500).json({ message: 'Failed to update user.', error: err.message });
        }
    } else {
        res.status(403).json({ message: 'Access denied.' });
    }
};

// Delete user
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
        res.status(403).json({ message: 'Access denied.' });
    }
};

// Verify JWT token
const verifyToken = (req, res) => {
    const { token } = req.body;

    if (!token) {
        return res.status(400).json({ message: 'Token is required.' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            console.error('Token verification error:', err.message);
            return res.status(403).json({ message: 'Invalid or expired token.', error: err.message });
        }

        res.status(200).json({ message: 'Token is valid.', user: decoded });
    });
};


module.exports = {
    register,
    login,
    refreshAccessToken,
    logout,
    getAllUsers,
    getAllDeliveryPerson,
    getUserById,
    updateUser,
    deleteUser,
    verifyToken,
};
