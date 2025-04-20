const express = require("express");
const {
  assignDelivery,
  trackDelivery,
  updateDeliveryStatus,
  getDeliveryRoute,
  addDeliveryRoute,
} = require("../controllers/DeliveryController");
const {
  authenticate,
  authorizeRoles,
} = require("../middleware/authMiddleware");
const router = express.Router();

router.post("/assign-driver/:orderId", authenticate, assignDelivery);
router.get("/track/:orderId", authenticate, trackDelivery);
router.patch(
  "/update-status/:deliveryId",
  authenticate,
  authorizeRoles("DeliveryPerson", "Admin"),
  updateDeliveryStatus
);
router.get(
  "/delivery-route/:deliveryId",
  authenticate,
  authorizeRoles("DeliveryPerson", "Admin"),
  getDeliveryRoute
);
router.post(
  "/delivery/:deliveryId/route",
  authenticate,
  authorizeRoles("Admin"),
  addDeliveryRoute
);
module.exports = router;
