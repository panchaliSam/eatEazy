const express = require('express');
const { register, login, getAllUsers } = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users', authenticateToken, getAllUsers); // Only accessible for Admins

module.exports = router;
