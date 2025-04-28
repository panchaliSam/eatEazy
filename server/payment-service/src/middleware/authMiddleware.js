const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/env');

const authenticateToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (!authHeader) {
        return res.status(403).json({ message: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    if (!token) {
        return res.status(403).json({ message: 'Access denied. Malformed token.' });
    }

    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(403).json({ message: `Invalid token: ${err.message}` });
        }
        req.user = decoded;
        next();
    });
};

// Middleware to check if user is an admin
const isAdmin = (req, res, next) => {
    if (req.user && req.user.role === 'admin') {
        next(); 
    } else {
        return res.status(403).json({ message: 'Access denied. Admins only.' });
    }
};


module.exports = { authenticateToken, isAdmin };
