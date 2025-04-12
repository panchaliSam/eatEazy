const jwt = require('jsonwebtoken');
const { JWT_SECRET, JWT_EXPIRATION } = require('../config/env');

const generateToken = (userId, email, role) => {
    const expiresIn = isNaN(JWT_EXPIRATION) ? JWT_EXPIRATION : parseInt(JWT_EXPIRATION, 10);
    return jwt.sign({ id: userId, email, role }, JWT_SECRET, { expiresIn });
};

module.exports = { generateToken };
