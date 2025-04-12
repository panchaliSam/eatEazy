const DeliveryService = require("../services/DeliveryService");

class DeliveryController {
  static async assignDelivery(req, res) {
    try {
      const { orderId } = req.params;
      const driver = await DeliveryService.assignDelivery(orderId);
      res.json({ success: true, message: "Driver assigned", driver });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  static async trackDelivery(req, res) {
    try {
      const { orderId } = req.params;
      const delivery = await DeliveryService.trackDelivery(orderId);
      if (!delivery)
        return res.status(404).json({ message: "Order not found" });

      res.json(delivery);
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  static async updateDeliveryStatus(req, res) {
    try {
      const { deliveryId } = req.params;
      const { status } = req.body;

      await DeliveryService.updateStatus(deliveryId, status);
      res.json({ success: true, message: "Delivery status updated" });
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  static async getDeliveryRoute(req, res) {
    try {
      const { deliveryId } = req.params;
      const route = await DeliveryService.getRoute(deliveryId);
      if (!route)
        return res.status(404).json({ message: "Delivery route not found" });

      res.json(route);
    } catch (error) {
      res.status(500).json({ success: false, message: error.message });
    }
  }

  static async addDeliveryRoute(req, res) {
    try {
      const { deliveryId } = req.params;
      const { startLat, startLng, endLat, endLng } = req.body;

      const result = await DeliveryService.addRoute(deliveryId, {
        startLat,
        startLng,
        endLat,
        endLng,
      });

      res.json({ success: true, route: result });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = DeliveryController;
