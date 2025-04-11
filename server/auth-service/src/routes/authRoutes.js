const express = require('express');
const { register, login, refreshAccessToken, logout, getAllUsers, getUserById, updateUser, deleteUser, verifyToken} = require('../controllers/authController');
const { authenticateToken } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/refresh', async (req, res) => {
    try {
        const { refreshToken } = req.body;
        const newAccessToken = await refreshAccessToken(refreshToken);
        res.json(newAccessToken);
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
});
router.post('/logout', async (req, res) => {
    try {
        const { refreshToken } = req.body;
        await logout(refreshToken);
        res.json({ message: 'Logged out successfully' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});
router.get('/users', authenticateToken, getAllUsers);
router.get('/users/:id', authenticateToken, getUserById);
router.put('/users/:id', authenticateToken, updateUser);
router.delete('/users/:id', authenticateToken, deleteUser);
router.post('/verify',verifyToken);

module.exports = router;
