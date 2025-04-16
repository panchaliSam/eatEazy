const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const createCart = (userId, restaurantId, status) => {
  return prisma.carts.create({
    data: { UserID: userId, RestaurantID: restaurantId, Status: status },
  });
};

const updateCartStatus = (cartId, status) => {
  return prisma.carts.update({
    where: { CartID: cartId },
    data: { Status: status },
  });
};

const createCartItem = (data) => {
  return prisma.cartItems.create({ data });
};

const createOrder = (data) => {
  return prisma.orders.create({ data, include: { Items: true } });
};

const getOrderById = async (orderId) => {
  // Ensure orderId is an integer
  const orderIdInt = parseInt(orderId, 10);

  // Check if orderId is a valid integer
  if (isNaN(orderIdInt)) {
    throw new Error("Invalid order ID");
  }

  // Use the integer orderId in the query
  return await prisma.orders.findUnique({
    where: {
      OrderID: orderIdInt
    }
  });
};


const updateCartItems = async (orderId, cartId, items) => {
  // First, update the cart items (quantity or price changes)
  for (const item of items) {
    if (!item.CartItemsID) {
      throw new Error("CartItemsID is required to update a cart item.");
    }

    await prisma.cartItems.update({
      where: {
        CartItemsID: item.CartItemsID, // Ensure this is valid
      },
      data: {
        Quantity: item.Quantity, // Assuming you want to update quantity
      },
    });
  }

  // Fetch the updated cart items
  const updatedCartItems = await prisma.cartItems.findMany({
    where: { CartID: parseInt(cartId) },
  });

  // Recalculate the total amount
  const totalAmount = updatedCartItems.reduce((sum, item) => {
    return sum + item.Price * item.Quantity;
  }, 0);

  // Update the cart with the new total amount
  await prisma.orders.update({
    where: {
      OrderID: orderId  // make sure this is an integer
    },
    data: {
      TotalAmount: totalAmount
    }
  });
};


// orderRepository.js
const updateOrder = async (orderId, items) => {
  // First, update the order items
  for (const item of items) {
    await prisma.orderItems.update({
      where: { OrderItemID: item.OrderItemID },
      data: {
        Quantity: item.Quantity
      },
    });
  }

  // Now, recalculate the total for the order
  const updatedOrderItems = await prisma.orderItems.findMany({
    where: { OrderID: orderId },
  });

  const totalAmount = updatedOrderItems.reduce((sum, item) => {
    return sum + item.Price * item.Quantity;
  }, 0);

  // Update the order with the new total amount
  return await prisma.orders.update({
    where: { OrderID: orderId },
    data: { TotalAmount: totalAmount },
  });
};

const deleteOrder = async (orderId) => {
  await prisma.orderItems.deleteMany({
    where: { OrderID: orderId },
  });

  return await prisma.orders.delete({
    where: { OrderID: orderId },
  });
};
const deleteCartItems = async (orderId) => {
    return await prisma.cartItems.deleteMany({
      where: { CartID: orderId },
    });
  };

const deleteCart = async (cartId) => {
    return await prisma.carts.delete({
      where: { CartID: cartId },
    });
  };
  
  const updateCartTotal = async (cartId, items) => {
    const updatedCartItems = await prisma.cartItems.findMany({
      where: { CartID: cartId },
    });
  
    const totalAmount = updatedCartItems.reduce((sum, item) => {
      return sum + item.Price * item.Quantity;
    }, 0);
  
    return await prisma.carts.update({
      where: { CartID: cartId },
      data: { TotalAmount: totalAmount },
    });
  };
  
  // Update total for order
  const updateOrderTotal = async (orderId, items) => {
    const updatedOrderItems = await prisma.orderItems.findMany({
      where: { OrderID: orderId },
    });
  
    const totalAmount = updatedOrderItems.reduce((sum, item) => {
      return sum + item.Price * item.Quantity;
    }, 0);
  
    return await prisma.orders.update({
      where: { OrderID: orderId },
      data: { TotalAmount: totalAmount },
    });
  };
  
module.exports = {
  createCart,
  createCartItem,
  createOrder,
  updateCartStatus,
  updateCartItems,
  getOrderById,
  updateOrder,
  deleteOrder,
  deleteCartItems,
  deleteCart,
  updateCartTotal,
  updateOrderTotal
};
