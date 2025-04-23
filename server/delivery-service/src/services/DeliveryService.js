const DeliveryModel = require("../models/Delivery");
const prisma = require("../config/prisma");
const axios = require("axios");
const { AUTH_SERVICE_URL } = require("../config/env");

const assignDelivery = async (orderId) => {
  //.env the base URL for user service

  const { data: drivers } = await axios.get(`${AUTH_SERVICE_URL}/drivers`);
  const orderID = parseInt(orderId);

  if (!drivers.length) {
    throw new Error("No delivery drivers available");
  }

  const randomDriver = drivers[Math.floor(Math.random() * drivers.length)];

  await DeliveryModel.assignDeliveryPerson(orderID, randomDriver.UserID);
  return randomDriver;
};

const updateStatus = async (deliveryId, status) => {
  const deliveryID = parseInt(deliveryId);
  console.log(deliveryID);
  // Validate the status before updating
  // Assuming valid statuses are "Assigned", "In Transit", "Delivered", "Failed"
  const validStatuses = ["Assigned", "In Transit", "Delivered", "Failed"];
  if (!validStatuses.includes(status)) {
    throw new Error("Invalid delivery status");
  }

  return await DeliveryModel.updateDeliveryStatus(deliveryID, status);
};

const trackDelivery = async (orderId) => {
  const orderID = parseInt(orderId);

  return await DeliveryModel.getDeliveryStatus(orderID);
};

const getRoute = async (deliveryId) => {
  const deliveryID = parseInt(deliveryId);
  return await DeliveryModel.getDeliveryRoute(deliveryID);
};

const addRoute = async (deliveryId, { startLat, startLng, endLat, endLng }) => {
  return await DeliveryModel.insertRoute(
    deliveryId,
    startLat,
    startLng,
    endLat,
    endLng
  );
};

module.exports = {
  assignDelivery,
  updateStatus,
  trackDelivery,
  getRoute,
  addRoute,
};
