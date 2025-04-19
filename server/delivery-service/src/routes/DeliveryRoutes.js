const express = require("express");
const DeliveryController = require("../controllers/DeliveryController");
const {
  authenticate,
  authorizeRoles,
} = require("../middleware/authMiddleware");

const router = express.Router();

router.post(
  "/assign-driver/:orderId",
  authenticate,
  DeliveryController.assignDelivery
);
router.get("/track/:orderId", authenticate, DeliveryController.trackDelivery);
router.patch(
  "/update-status/:deliveryId",
  authenticate,
  authorizeRoles("DeliveryPerson"),
  DeliveryController.updateDeliveryStatus
);
router.get(
  "/delivery-route/:deliveryId",
  authenticate,
  authorizeRoles("DeliveryPerson", "Admin"),
  DeliveryController.getDeliveryRoute
);
router.post(
  "/delivery/:deliveryId/route",
  authenticate,
  authorizeRoles("Admin"),
  DeliveryController.addDeliveryRoute
);
module.exports = router;
