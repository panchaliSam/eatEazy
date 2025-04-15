// orderRoutes.js
const express = require("express");
const router = express.Router();
const {
    addOrder,
    getOrder,
    updateOrder,
    deleteOrder
} = require("../controllers/orderController");

router.post("/addOrder/:restaurantId", addOrder);
router.get("/getOrder/:id", getOrder);
router.put("/updateOrder/:id", updateOrder);
router.delete("/deleteOrder/:id", deleteOrder);

module.exports = router;
