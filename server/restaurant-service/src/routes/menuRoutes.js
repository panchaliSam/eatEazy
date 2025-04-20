const express = require("express");
const router = express.Router({ mergeParams: true });
const {
  authenticateToken,
  isRestaurant,
} = require("../middleware/authMiddleware");
const {
  createMenuItem,
  getMenuItemsByRestaurantId,
  getMenuItemById,
  updateMenuItemById,
  deleteMenuItemById,
} = require("../controllers/menuController");

router.post("/", authenticateToken, isRestaurant, createMenuItem);
router.get("/", authenticateToken, getMenuItemsByRestaurantId);
router.get("/:menuItemId", authenticateToken, getMenuItemById);
router.put("/:menuItemId", authenticateToken, isRestaurant, updateMenuItemById);
router.delete(
  "/:menuItemId",
  authenticateToken,
  isRestaurant,
  deleteMenuItemById
);

module.exports = router;
