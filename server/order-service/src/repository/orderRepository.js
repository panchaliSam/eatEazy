const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();


const createCart = (userId, restaurantId, status) => {
  return prisma.carts.create({
    data: { UserID: userId, RestaurantID: restaurantId, Status: status },
  });
};

const createCartItem = (data) => {
  return prisma.cartItems.create({ data });
};

const createOrder = (data) => {
  if (!data.Status) {
    data.Status = 'Pending'; 
  }
  
  return prisma.orders.create({ 
    data, 
    include: { Items: true } 
  });
};
const findActiveCart = async (userId, restaurantId) => {
  return await prisma.carts.findFirst({
    where: {
      UserID: userId,
      RestaurantID: restaurantId,
      Status: 'ACTIVE'
    }
  });
};
const getCartItems = async (cartId) => {
  return await prisma.cartItems.findMany({
    where: { CartID: cartId }
  });
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
const getOrderByUserId = async (userId) =>{
  //ensure user id is an integer
  const userIdInt = parseInt(userId);

  return await prisma.orders.findMany({
    where:{
      UserID : userIdInt
    }
  });
};

const getAllOrderbyRestaurantId = async(restaurantId) =>{
  const restaurantIdInt = parseInt(restaurantId);

  return await prisma.orders.findMany({
    where:{
      RestaurantID:restaurantIdInt
    }
  });

};
const getAllOrdersForAdmin = async () => {
  return await prisma.orders.findMany({
    orderBy: { CreatedAt: 'desc' },
    include: { Items: true } 
  });
};

const getOrderByCartId = async (cartId) => {
  return await prisma.orders.findFirst({
    where: { CartID: parseInt(cartId) },
    include: {
      Items: true
    }
  });
};

const updateCartStatus = (cartId, status) => {
  return prisma.carts.update({
    where: { CartID: cartId },
    data: { Status: status },
  });
};

const updateCartItems = async (cartId, items) => {
  try {
    for (const item of items) {
      if (!item.CartItemsID) {
        throw new Error("CartItemsID is required.");
      }

      await prisma.cartItems.update({
        where: { CartItemsID: item.CartItemsID },
        data: { Quantity: item.Quantity },
      });
    }

    return await prisma.cartItems.findMany({
      where: { CartID: parseInt(cartId) },
    });
  } catch (error) {
    throw new Error(`Failed to update cart items: ${error.message}`);
  }
};

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

const updateOrderTotal = async (orderId) => {
  const updatedOrderItems = await prisma.orderItems.findMany({
    where: { OrderID: orderId },
  });

  const totalAmount = updatedOrderItems.reduce(
    (sum, item) => sum + item.Price * item.Quantity,
    0
  );

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
const updatePaymentStatus = async (orderId, paymentStatus) => {
    return await prisma.orders.update({
      where: { OrderID: parseInt(orderId) },
      data: { Status: paymentStatus }
    });
  };
  

  
module.exports = {
  createCart,
  createCartItem,
  createOrder,
  updateCartStatus,
  updateCartItems,
  updateOrder,
  updateOrderTotal,
  findActiveCart,
  getCartItems,
  getOrderById,
  getOrderByUserId,
  getAllOrderbyRestaurantId,
  getAllOrdersForAdmin,
  getOrderByCartId,
  deleteOrder,
  deleteCartItems,
  deleteCart,
  updatePaymentStatus
};