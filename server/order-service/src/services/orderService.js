const orderModel = require("../models/orderModel");

// Add item to cart
const addToCart = async (userId, menuItemId, quantity) => {
    try {
        const result = await orderModel.addToCart(userId, menuItemId, quantity);
        return result;
    } catch (error) {
        throw new Error(`Failed to add to cart: ${error.message}`);
    }
};

// Checkout cart
const checkout = async (userId, restaurantId) => {
    try {
        const result = await orderModel.checkout(userId, restaurantId);
        return result;
    } catch (error) {
        throw new Error(`Checkout failed: ${error.message}`);
    }
};

// Update cart item
const updateCart = async (userId, menuItemId, quantity) => {
    try {
        const result = await orderModel.updateCart(userId, menuItemId, quantity);
        return result;
    } catch (error) {
        throw new Error(`Failed to update cart: ${error.message}`);
    }
};

// Delete item from cart
const deleteCartItem = async (userId, menuItemId) => {
    try {
        const result = await orderModel.deleteCartItem(userId, menuItemId);
        return result;
    } catch (error) {
        throw new Error(`Failed to delete item from cart: ${error.message}`);
    }
};

// Get cart items
const getCart = async (userId) => {
    try {
        const result = await orderModel.getCart(userId);
        return result;
    } catch (error) {
        throw new Error(`Failed to get cart: ${error.message}`);
    }
};

// Get orders by customer
const findByCustomerId = async (customerId) => {
    try {
        const result = await orderModel.findByCustomerId(customerId);
        return result;
    } catch (error) {
        throw new Error(`Failed to fetch orders: ${error.message}`);
    }
};

// Get order by ID
const findById = async (orderId) => {
    try {
        const result = await orderModel.findById(orderId);
        return result;
    } catch (error) {
        throw new Error(`Failed to fetch order: ${error.message}`);
    }
};

// Get all orders
const getAllOrders = async () => {
    try {
        const result = await orderModel.getAllOrders();
        return result;
    } catch (error) {
        throw new Error(`Failed to get orders: ${error.message}`);
    }
};

// Update order status
const updateStatus = async (orderId, newStatus) => {
    try {
        const result = await orderModel.updateStatus(orderId, newStatus);
        return result;
    } catch (error) {
        throw new Error(`Failed to update status: ${error.message}`);
    }
};

// Get order details
const getOrderDetails = async (orderId) => {
    try {
        const result = await orderModel.getOrderDetails(orderId);
        return result;
    } catch (error) {
        throw new Error(`Failed to get order details: ${error.message}`);
    }
};

// Get order status
const getOrderStatus = async (orderId) => {
    try {
        const result = await orderModel.getOrderStatus(orderId);
        return result;
    } catch (error) {
        throw new Error(`Failed to get order status: ${error.message}`);
    }
};

module.exports = {
    addToCart,
    checkout,
    updateCart,
    deleteCartItem,
    getCart,
    findByCustomerId,
    findById,
    getAllOrders,
    updateStatus,
    getOrderDetails,
    getOrderStatus
};
