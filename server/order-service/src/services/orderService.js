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

const getMenuItemPrice = async (restaurantId, menuItemId, token) => {
  const response = await axios.get(
    `http://localhost:4000/restaurants/${restaurantId}/menu`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const menuItems = response.data;
  const item = menuItems.find((m) => m.MenuItemID === menuItemId);
  return item?.Price;
};

const processOrder = async (token, items, restaurantId) => {
  const user = await verifyToken(token);
  const userId = user.id;

  const cart = await orderRepo.createCart(userId, restaurantId, "ACTIVE");

  const cartItems = [];

  for (const item of items) {
    const price = await getMenuItemPrice(restaurantId, item.menuItemId,token);
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

const updateCartAndOrder = async (cartId, items) => {
  try {
    const cartIdInt = parseInt(cartId);

    // Update Cart Items
    for (const item of items) {
      if (!item.CartItemsID) {
        throw new Error("CartItemsID is required.");
      }

      await prisma.cartItems.update({
        where: { CartItemsID: item.CartItemsID },
        data: { Quantity: item.Quantity },
      });
    }

    // Find the associated Order
    const order = await prisma.orders.findFirst({
      where: { CartID: cartIdInt },
    });

    if (!order) {
      throw new Error("Order not found.");
    }

    const orderId = order.OrderID;

    // Update Order Items
    for (const item of items) {
      const cartItem = await prisma.cartItems.findUnique({
        where: { CartItemsID: item.CartItemsID },
      });

      if (!cartItem) continue;

      await prisma.orderItems.updateMany({
        where: {
          OrderID: orderId,
          MenuItemID: cartItem.MenuItemID,
        },
        data: { Quantity: item.Quantity },
      });
    }

    // Recalculate and Update Order Total
    return await updateOrderTotal(orderId);
  } catch (error) {
    throw new Error(`Failed to update cart and order: ${error.message}`);
  }
};

  
const getOrderById = async (id) => {
    const order = await orderRepo.getOrderById(id);
    if (!order) throw new Error("Order not found");
    return order;
  };

const getOrderByUserId=async(id)=>{
  const order=await orderRepo.getOrderByUserId(id);
  if(!order) throw new Error("No orders for user");
  return order;
}  
   
const deleteOrder = async (orderId) => {
    const existingOrder = await orderRepo.getOrderById(orderId);
    if (!existingOrder) {
      throw new Error(`Order with ID ${orderId} not found.`);
    }
  
    await orderRepo.deleteOrder(orderId);
    return { message: `Order ${orderId} deleted successfully.` };
  };

const getAllOrderbyRestaurantId=async(id)=>{
  const order=await orderRepo.getAllOrderbyRestaurantId(id);
  if(!order) throw new Error("No orders for restaurant");
  return order;
}  
const updatePaymentStatus = async (orderId, status) => {
  const updatedOrder = await orderRepo.updatePaymentStatus(orderId, status);
  return updatedOrder;
};

  
  module.exports = {
    processOrder,
    updateCartAndOrder,
    updatePaymentStatus,
    getOrderById,
    getOrderByUserId,
    getAllOrderbyRestaurantId,
    deleteOrder
  };
  