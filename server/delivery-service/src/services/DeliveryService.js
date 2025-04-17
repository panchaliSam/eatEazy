const DeliveryRepository = require("../repository/DeliveryRepository");

class DeliveryService {
  static async assignDelivery(orderid) {
    const [drivers] = await db.query(
      "SELECT UserID FROM Users WHERE Role = 'DeliveryPerson' ORDER BY RAND() LIMIT 1"
    );
    if (drivers.length === 0) {
      throw new Error("No delivery drivers available");
    }
    await DeliveryRepository.assignDeliveryPerson(orderid, drivers[0].UserID);
    return drivers[0];
  }

  static async trackDelivery(orderId) {
    return await DeliveryRepository.getDeliveryStatus(orderId);
  }

  static async updateStatus(deliveryId, status) {
    // Validate the status before updating
    // Assuming valid statuses are "Assigned", "In Transit", "Delivered", "Failed"
    const validStatuses = ["Assigned", "In Transit", "Delivered", "Failed"];
    if (!validStatuses.includes(status)) {
      throw new Error("Invalid delivery status");
    }

    return await DeliveryRepository.updateDeliveryStatus(deliveryId, status);
  }

  static async getRoute(deliveryId) {
    return await DeliveryRepository.getDeliveryRoute(deliveryId);
  }

  static async addRoute(deliveryId, { startLat, startLng, endLat, endLng }) {
    return await DeliveryRepository.insertRoute(
      deliveryId,
      startLat,
      startLng,
      endLat,
      endLng
    );
  }
}

module.exports = DeliveryService;
