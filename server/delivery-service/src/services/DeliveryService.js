const DeliveryRepository = require("../repository/DeliveryRepository");
const prisma = require("../config/prisma");
const axios = require("axios");
const { AUTH_SERVICE_URL } = require("../config/env");

class DeliveryService {
  static async assignDelivery(orderId) {
    //.env the base URL for user service

    const { data: drivers } = await axios.get(`${AUTH_SERVICE_URL}/drivers`);
    const orderID = parseInt(orderId);

    if (!drivers.length) {
      throw new Error("No delivery drivers available");
    }

    const randomDriver = drivers[Math.floor(Math.random() * drivers.length)];

    await DeliveryRepository.assignDeliveryPerson(orderID, randomDriver.UserID);
    return randomDriver;
  }

  static async updateStatus(deliveryId, status) {
    const deliveryID = parseInt(deliveryId);
    console.log(deliveryID);
    // Validate the status before updating
    // Assuming valid statuses are "Assigned", "In Transit", "Delivered", "Failed"
    const validStatuses = ["Assigned", "In Transit", "Delivered", "Failed"];
    if (!validStatuses.includes(status)) {
      throw new Error("Invalid delivery status");
    }

    return await DeliveryRepository.updateDeliveryStatus(deliveryID, status);
  }

  static async trackDelivery(orderId) {
    const orderID = parseInt(orderId);

    return await DeliveryRepository.getDeliveryStatus(orderID);
  }

  static async getRoute(deliveryId) {
    const deliveryID = parseInt(deliveryId);
    return await DeliveryRepository.getDeliveryRoute(deliveryID);
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
