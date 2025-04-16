const orderService = require("../services/orderService");
const OrderRepository = require('../repository/orderRepository');

const addOrder = async (req, res) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "Unauthorized: No token provided" });
  }

  const token = authHeader.split(" ")[1];
  const { items } = req.body;
  const restaurantId = parseInt(req.params.restaurantId); 

  if (isNaN(restaurantId)) {
    return res.status(400).json({ message: "Invalid restaurant ID" });
  }

  try {
    const order = await orderService.processOrder(token, items,restaurantId);
    res.status(201).json(order);
  }catch (error) {
    console.error("Order creation failed:", {
      message: error.message,
      responseData: error.response?.data,
      stack: error.stack
    });
    res.status(500).json({ message: error.message });
  }
  
};
const getOrder = async (req, res) => {
  try {
    const order = await orderService.getOrderById(parseInt(req.params.id));
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateOrder = async (req, res) => {
  const { orderId } = req.params;  // Order ID from the URL
  const { items } = req.body;  // Items with updated quantities and prices

  try {
    // Update cart items first
    await OrderRepository.updateCartItems(orderId, items);

    // Now, update the order and its items
    const updatedOrder = await OrderRepository.updateOrder(orderId, items);

    res.status(200).json({ message: 'Order updated successfully', updatedOrder });
  } catch (error) {
    console.error("Order update failed:", error);
    res.status(500).json({ message: 'Order update failed', error: error.message });
  }
};

const deleteOrder = async (req, res) => {
  try {
    const orderId = parseInt(req.params.id);
    const result = await orderService.deleteOrder(orderId);
    res.json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addOrder,
  getOrder,
  updateOrder,
  deleteOrder,
};