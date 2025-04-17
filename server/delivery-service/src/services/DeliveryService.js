const DeliveryRepository = require("../repository/DeliveryRepository");
const prisma = require("../config/prisma");

class DeliveryService {
  static async assignDelivery(orderId) {
    const drivers = await prisma.users.findMany({
      where: {
        Role: "DeliveryPerson",
      },
    });

    if (!drivers.length) {
      throw new Error("No delivery drivers available");
    }

    const randomDriver = drivers[Math.floor(Math.random() * drivers.length)];

    await DeliveryRepository.assignDeliveryPerson(orderId, randomDriver.UserID);
    return randomDriver;
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

  static async trackDelivery(orderId) {
    return await DeliveryRepository.getDeliveryStatus(orderId);
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
