const express = require('express');
const router = express.Router({ mergeParams: true });
const { authenticateToken } = require('../middleware/authMiddleware');
const OrderController = require('../controllers/orderController');

// Cart Routes
router.post("/cart/add", OrderController.addToCart);
router.post("/cart/checkout", OrderController.checkout);
router.put("/cart/update", OrderController.updateCart);
router.delete("/cart/:userId/:menuItemId", OrderController.deleteCartItem);
router.get("/cart/:userId", OrderController.getCart);

// Order Routes
router.get("/customer/:customerId", OrderController.findByCustomerId);
router.get("/:orderId", OrderController.findById);
router.get("/", OrderController.getAllOrders);
router.put("/status/:orderId", OrderController.updateStatus);
router.get("/details/:orderId", OrderController.getOrderDetails);
router.get("/status/:orderId", OrderController.getOrderStatus);

module.exports = router;
