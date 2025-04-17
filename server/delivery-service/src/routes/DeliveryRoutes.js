const express = require("express");
const DeliveryController = require("../controllers/DeliveryController");

const router = express.Router();

router.post("/assign-driver/:orderId", DeliveryController.assignDelivery);
router.get("/track/:orderId", DeliveryController.trackDelivery);
router.patch(
  "/update-status/:deliveryId",
  DeliveryController.updateDeliveryStatus
);
router.get("/delivery-route/:deliveryId", DeliveryController.getDeliveryRoute);

module.exports = router;
