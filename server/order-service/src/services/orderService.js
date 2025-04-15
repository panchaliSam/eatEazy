const axios = require("axios");
const orderRepo = require("../repository/orderRepository");
const { API_GATEWAY_PORT} = require('../config/env');

const verifyToken = async (token) => {
    if (!token) {
        console.error("No token provided!");
        throw new Error("Token is required.");
      }
    
      //console.log("Verifying token:", token);

  const response = await axios.post(
    `http://localhost:4000/auth/verify`,
    { token }, 
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data.user;
};

const getMenuItemPrice = async (restaurantId, menuItemId) => {
  const response = await axios.get(
    `http://localhost:4000/restaurants/${restaurantId}/menu`
  );
  const menuItems = response.data;
  const item = menuItems.find((m) => m.MenuItemID === menuItemId);
  return item?.Price;
};

const processOrder = async (token, items) => {
  const user = await verifyToken(token);
  const userId = user.id;
  const restaurantId = 1;

  const cart = await orderRepo.createCart(userId, restaurantId, "ACTIVE");

  const cartItems = [];

  for (const item of items) {
    const price = await getMenuItemPrice(restaurantId, item.menuItemId);
    if (!price) throw new Error(`Invalid menu item: ${item.menuItemId}`);

    const cartItem = await orderRepo.createCartItem({
      CartID: cart.CartID,
      MenuItemID: item.menuItemId,
      Quantity: item.quantity,
      Price: parseFloat(price),
    });

    cartItems.push(cartItem);
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.Price * item.Quantity,
    0
  );

  const order = await orderRepo.createOrder({
    UserID: userId,
    RestaurantID: restaurantId,
    CartID: cart.CartID,
    TotalAmount: total,
    Items: {
      create: cartItems.map((item) => ({
        MenuItemID: item.MenuItemID,
        Quantity: item.Quantity,
        Price: item.Price,
      })),
    },
  });

  await orderRepo.updateCartStatus(cart.CartID, "COMPLETED");

  return order;
};

const updateOrder = async (orderId, updatedData) => {
    const existingOrder = await orderRepo.getOrderById(orderId);
    if (!existingOrder) {
      throw new Error(`Order with ID ${orderId} not found.`);
    }
  
    const updatedOrder = await orderRepo.updateOrder(orderId, updatedData);
    return updatedOrder;
  };
  
  const deleteOrder = async (orderId) => {
    const existingOrder = await orderRepo.getOrderById(orderId);
    if (!existingOrder) {
      throw new Error(`Order with ID ${orderId} not found.`);
    }
  
    await orderRepo.deleteOrder(orderId);
    return { message: `Order ${orderId} deleted successfully.` };
  };

  
const getOrderById = async (id) => {
    const order = await orderRepo.getOrderById(id);
    if (!order) throw new Error("Order not found");
    return order;
  };
  
  module.exports = {
    processOrder,
    updateOrder,
    deleteOrder,
    getOrderById
  };
  
