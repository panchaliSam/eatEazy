const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRATION } = require('../config/env');

const generateToken = (userId, email, role) => {
    return jwt.sign({ id: userId, email, role }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
};

module.exports = { generateToken };
