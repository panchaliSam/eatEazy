// orderRoutes.js
const express = require("express");
const router = express.Router();
const { authenticateToken, isRestaurant } = require("../middleware/authMiddleware");
const {
    addOrder,
    getOrder,
    updateOrder,
    deleteOrder
} = require("../controllers/orderController");

router.post("/addOrder/:restaurantId", addOrder);
router.get("/getOrder/:id", authenticateToken,getOrder);
router.put("/updateOrder/:id", authenticateToken, updateOrder);
router.delete("/deleteOrder/:id", authenticateToken, deleteOrder);

module.exports = router;
