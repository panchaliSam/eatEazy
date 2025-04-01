const express = require('express');
const router = express.Router();
const { authenticateToken, isRestaurant } = require('../middleware/authMiddleware');
const {
    registerRestaurant,
    getAllRestaurants,
    getRestaurantById,
    updateRestaurantById,
    deleteRestaurantById
} = require('../controllers/restaurantController');

router.post('/register', authenticateToken, isRestaurant, registerRestaurant);
router.get('/', authenticateToken, getAllRestaurants);
router.get('/:id', authenticateToken, getRestaurantById);
router.put('/:id', authenticateToken, isRestaurant, updateRestaurantById);
router.delete('/:id', authenticateToken, isRestaurant, deleteRestaurantById);

module.exports = router;
