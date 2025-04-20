// orderRoutes.js
const express = require("express");
const router = express.Router();
const { authenticateToken, isRestaurant } = require("../middleware/authMiddleware");
const {
    addOrder,
    getOrder,
    getOrderByUserId,
    getAllOrderbyRestaurantId,
    updateCartByCartId,
    deleteOrder
} = require("../controllers/orderController");

router.post("/addOrder", addOrder);
router.get("/getOrderByOrderId/:id", authenticateToken,getOrder);
router.get("/getOrderByUserId/:id", authenticateToken,getOrderByUserId);
router.get("/getAllOrderbyRestaurantId/:id", authenticateToken,isRestaurant,getAllOrderbyRestaurantId);
router.put("/updateCartByCartId/:cartId", authenticateToken, updateCartByCartId);
router.delete("/deleteOrderByOrderId/:id", authenticateToken, deleteOrder);

module.exports = router;
