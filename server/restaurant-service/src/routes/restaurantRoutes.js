const express = require('express');
const router = express.Router();
const { registerRestaurant } = require('../controllers/restaurantController');
const { authenticateToken, isRestaurant } = require('../middleware/authMiddleware');

// Register new restaurant
router.post('/register', authenticateToken, isRestaurant, registerRestaurant);

module.exports = router;