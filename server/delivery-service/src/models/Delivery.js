const DeliveryRepository = require("../repository/DeliveryRepository");

const DeliveryModel = {
  assignDeliveryPerson: async (orderId, deliveryPersonId) => {
    return await DeliveryRepository.assignDeliveryPerson(
      orderId,
      deliveryPersonId
    );
  },
  getDeliveryStatus: async (orderId) => {
    return await DeliveryRepository.getDeliveryStatus(orderId);
  },
  updateDeliveryStatus: async (deliveryId, status) => {
    return await DeliveryRepository.updateDeliveryStatus(deliveryId, status);
  },
  getDeliveryRoute: async (deliveryId) => {
    return await DeliveryRepository.getDeliveryRoute(deliveryId);
  },
  insertRoute: async (deliveryId, startLat, startLng, endLat, endLng) => {
    return await DeliveryRepository.insertRoute(
      deliveryId,
      startLat,
      startLng,
      endLat,
      endLng
    );
  },
};

module.exports = DeliveryModel;
