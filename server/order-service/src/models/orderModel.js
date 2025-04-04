const OrderRepository = require('../repository/orderRepository');

const OrderModel = {
    addToCart: async (userId, menuItemId, quantity) => {
        return await OrderRepository.addToCart(userId, menuItemId, quantity);
    },
    checkout: async (userId, restaurantId) => {
        return await OrderRepository.checkout(userId, restaurantId);
    },
    updateCart: async (userId, menuItemId, quantity) => {
        return await OrderRepository.updateCart(userId, menuItemId, quantity);
    },
    deleteCartItem: async (userId, menuItemId) => {
        return await OrderRepository.deleteCartItem(userId, menuItemId);
    },
    getCart: async (userId) => {
        return await OrderRepository.getCart(userId);
    },
    findByCustomerId: async (customerId) => {
        return await OrderRepository.findByCustomerId(customerId);
    },
    findById: async (orderId) => {
        return await OrderRepository.findById(orderId);
    },
    getAllOrders: async () => {
        return await OrderRepository.getAllOrders();
    },
    updateStatus: async (orderId, newStatus) => {
        return await OrderRepository.updateStatus(orderId, newStatus)
    },
    getOrderDetails: async (orderId) => {
        return await OrderRepository.getOrderDetails(orderId);
    },
    getOrderStatus:async (orderId) => {
        return await OrderRepository.getOrderStatus(orderId);
    }        

};

module.exports = OrderModel;