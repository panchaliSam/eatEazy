const DeliveryRepository = require("../repository/DeliveryRepository");

class DeliveryService {
  static async assignDelivery(orderid) {
    const [drivers] = await db.query(
      "SELECT UserID FROM Users WHERE Role = 'DeliveryPerson' ORDER BY RAND() LIMIT 1"
    );
    if (drivers.length === 0) {
      throw new Error("No delivery drivers available");
    }
    await DeliveryRepository.assignDekiveryPerson(orderid, drivers[0].UserID);
    return drivers[0];
  }

  static async trackDelivery(orderId) {
    return await DeliveryRepository.getDeliveryStatus(orderId);
  }

  static async updateStatus(deliveryId, status) {
    return await DeliveryRepository.updateDeliveryStatus(deliveryId, status);
  }

  static async getRoute(deliveryId) {
    return await DeliveryRepository.getDeliveryRoute(deliveryId);
  }
}

module.exports = DeliveryService;
