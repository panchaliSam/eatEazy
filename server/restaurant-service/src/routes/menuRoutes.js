const express = require('express');
const router = express.Router({ mergeParams: true });
const { authenticateToken, isRestaurant } = require('../middleware/authMiddleware');
const {
    createMenuItem,
    getMenuItemsByRestaurantId,
    updateMenuItemById,
    deleteMenuItemById
} = require('../controllers/menuController');

router.post('/', authenticateToken, isRestaurant, createMenuItem);
router.get('/', authenticateToken, getMenuItemsByRestaurantId);
router.put('/:menuItemId', authenticateToken, isRestaurant, updateMenuItemById);
router.delete('/:menuItemId', authenticateToken, isRestaurant, deleteMenuItemById);

module.exports = router;
