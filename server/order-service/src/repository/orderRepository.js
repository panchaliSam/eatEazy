const pool = require('../config/db');

const OrderRepository = {
    // Create a new order
    addToCart : async (userId, menuItemId, quantity) => {
        // Check if the user has an existing cart
        let cartQuery = `SELECT CartID FROM Carts WHERE UserID = ?`;
        const [cartRows] = await pool.execute(cartQuery, [userId]);
    
        let cartId;
        if (cartRows.length === 0) {
            // Create a new cart if not exists
            let createCartQuery = `INSERT INTO Carts (UserID) VALUES (?)`;
            const [cartResult] = await pool.execute(createCartQuery, [userId]);
            cartId = cartResult.insertId;
        } else {
            cartId = cartRows[0].CartID;
        }
    
        // Add item to the cart
        let insertQuery = `INSERT INTO CartItems (CartID, MenuItemID, Quantity) VALUES (?, ?, ?)`;
        await pool.execute(insertQuery, [cartId, menuItemId, quantity]);
    
        return { message: "Item added to cart successfully" };
    },
    

    // Find orders by customer ID
    findByCustomerId: async (customerId) => {
        const query = `SELECT * FROM Orders WHERE CustomerID = ?`;
        const [rows] = await pool.execute(query, [customerId]);
        return rows;
    },

    // Find order by ID
    findById: async (orderId) => {
        const query = `SELECT * FROM Orders WHERE OrderID = ?`;
        const [rows] = await pool.execute(query, [orderId]);
        return rows[0];
    },

    // Get all orders (admin or restaurant use)
    getAllOrders: async () => {
        const query = `SELECT * FROM Orders`;
        const [rows] = await pool.execute(query);
        return rows;
    },

    // Delete an order by ID
    deleteById: async (orderId) => {
        const query = `DELETE FROM Orders WHERE OrderID = ?`;
        const [result] = await pool.execute(query, [orderId]);
        return result;
    },

    // Update order status
    updateStatus: async (orderId, newStatus) => {
        const query = `UPDATE Orders SET OrderStatus = ? WHERE OrderID = ?`;
        const [result] = await pool.execute(query, [newStatus, orderId]);
        return result;
    },

    // Get order details including items
    getOrderDetails: async (orderId) => {
        const query = `
            SELECT o.*, od.MenuItemID, od.Quantity, od.ItemPrice, m.Name AS MenuItemName 
            FROM Orders o
            JOIN OrderDetails od ON o.OrderID = od.OrderID
            JOIN MenuItems m ON od.MenuItemID = m.MenuItemID
            WHERE o.OrderID = ?
        `;
        const [rows] = await pool.execute(query, [orderId]);
        return rows;
    },

    getOrderStatus:async (orderId) => {
        let query = `SELECT OrderStatus FROM Orders WHERE OrderID = ?`;
        const [rows] = await pool.execute(query, [orderId]);
    
        return rows.length > 0 ? rows[0] : { message: "Order not found" };
    },
    

    checkout: async (userId, restaurantId) => {
        // Fetch cart and items
        let cartQuery = `
            SELECT c.CartID, ci.MenuItemID, ci.Quantity, m.Price 
            FROM Carts c
            JOIN CartItems ci ON c.CartID = ci.CartID
            JOIN MenuItems m ON ci.MenuItemID = m.MenuItemID
            WHERE c.UserID = ?`;
        const [cartItems] = await pool.execute(cartQuery, [userId]);
    
        if (cartItems.length === 0) {
            throw new Error("Cart is empty!");
        }
    
        // Calculate order total
        let orderTotal = cartItems.reduce((sum, item) => sum + item.Quantity * item.Price, 0);
    
        // Create new order
        let orderQuery = `INSERT INTO Orders (CustomerID, RestaurantID, OrderStatus, OrderTotal) VALUES (?, ?, 'Pending', ?)`;
        const [orderResult] = await pool.execute(orderQuery, [userId, restaurantId, orderTotal]);
        let orderId = orderResult.insertId;
    
        // Move cart items to OrderDetails
        let orderDetailsQuery = `INSERT INTO OrderDetails (OrderID, MenuItemID, Quantity, ItemPrice) VALUES ?`;
        let orderDetailsValues = cartItems.map(item => [orderId, item.MenuItemID, item.Quantity, item.Price]);
        await pool.query(orderDetailsQuery, [orderDetailsValues]);
    
        // Clear cart after checkout
        let clearCartQuery = `DELETE FROM CartItems WHERE CartID = ?`;
        await pool.execute(clearCartQuery, [cartItems[0].CartID]);
    
        return { message: "Order placed successfully", orderId };
    }
    
};

module.exports = OrderRepository;
