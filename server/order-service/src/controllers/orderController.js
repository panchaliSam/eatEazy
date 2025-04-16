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
  const { id: orderId } = req.params;
  const { items } = req.body;
  const user = req.user;

  try {
    // Fetch existing order
    const existingOrder = await OrderRepository.getOrderById(orderId);
    if (!existingOrder) {
      return res.status(404).json({ message: 'Order not found' });
    }

    // Check if the order belongs to the authenticated user
    if (existingOrder.UserID !== user.id) {
      return res.status(403).json({ message: 'You are not authorized to update this order' });
    }

    //update
    await OrderRepository.updateCartItems(orderId, items);
    const updatedOrder = await orderService.updateOrder(orderId, items, req.user.id);

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