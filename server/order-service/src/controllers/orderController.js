const orderService = require("../services/orderService");

class OrderController {
    static async addToCart(req, res) {
        try {
            const { userId, menuItemId, quantity } = req.body;
            const result = await orderService.addToCart(userId, menuItemId, quantity);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async checkout(req, res) {
        try {
            const { userId, restaurantId } = req.body;
            const result = await orderService.checkout(userId, restaurantId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateCart(req, res) {
        try {
            const { userId, menuItemId, quantity } = req.body;
            const result = await orderService.updateCart(userId, menuItemId, quantity);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async deleteCartItem(req, res) {
        try {
            const { userId, menuItemId } = req.params;
            const result = await orderService.deleteCartItem(userId, menuItemId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getCart(req, res) {
        try {
            const { userId } = req.params;
            const result = await orderService.getCart(userId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async findByCustomerId(req, res) {
        try {
            const { customerId } = req.params;
            const result = await orderService.findByCustomerId(customerId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async findById(req, res) {
        try {
            const { orderId } = req.params;
            const result = await orderService.findById(orderId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getAllOrders(req, res) {
        try {
            const result = await orderService.getAllOrders();
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async updateStatus(req, res) {
        try {
            const { orderId } = req.params;
            const { newStatus } = req.body;
            const result = await orderService.updateStatus(orderId, newStatus);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getOrderDetails(req, res) {
        try {
            const { orderId } = req.params;
            const result = await orderService.getOrderDetails(orderId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    static async getOrderStatus(req, res) {
        try {
            const { orderId } = req.params;
            const result = await orderService.getOrderStatus(orderId);
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
}

module.exports = OrderController;
