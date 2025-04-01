const pool = require('../config/db');

const OrderRepository = {
    // Create a new order- this add order details to cart table
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
    
    //Checkout from cart- cart items are added to order table from cart table
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
    },

    //update cart details
    updateCart: async (userId, menuItemId, quantity) => {
        try {
            // Step 1: Check if the user has an existing cart
            const [cart] = await pool.execute('SELECT CartID FROM Carts WHERE UserID = ?', [userId]);

            if (cart.length === 0) {
                // If no cart exists for the user, create a new one
                const [createCart] = await pool.execute('INSERT INTO Carts (UserID) VALUES (?)', [userId]);
                cart[0] = { CartID: createCart.insertId }; // Set the CartID of the newly created cart
            }

            // Step 2: Check if the item already exists in the cart
            const [existingItem] = await pool.execute('SELECT * FROM CartItems WHERE CartID = ? AND MenuItemID = ?', [cart[0].CartID, menuItemId]);

            if (existingItem.length > 0) {
                // If the item exists in the cart, update its quantity
                const [updateItem] = await pool.execute('UPDATE CartItems SET Quantity = ? WHERE CartID = ? AND MenuItemID = ?', [quantity, cart[0].CartID, menuItemId]);
                return updateItem; // Return the result of the update
            } else {
                // If the item does not exist in the cart, add it
                const [addItem] = await pool.execute('INSERT INTO CartItems (CartID, MenuItemID, Quantity) VALUES (?, ?, ?)', [cart[0].CartID, menuItemId, quantity]);
                return addItem; // Return the result of the insertion
            }
        } catch (error) {
            console.error('Error updating cart:', error);
            throw new Error('Error updating cart');
        }
    },

    //delete items in cart
    deleteCartItem: async (userId, menuItemId) => {
        try {
            // Step 1: Check if the user has an existing cart
            const [cart] = await pool.execute('SELECT CartID FROM Carts WHERE UserID = ?', [userId]);

            if (cart.length === 0) {
                throw new Error('Cart not found for the user');
            }

            const cartId = cart[0].CartID;

            // Step 2: Check if the item exists in the cart
            const [existingItem] = await pool.execute('SELECT * FROM CartItems WHERE CartID = ? AND MenuItemID = ?', [cartId, menuItemId]);

            if (existingItem.length === 0) {
                throw new Error('Item not found in cart');
            }

            // Step 3: Delete the item from the cart
            const [result] = await pool.execute('DELETE FROM CartItems WHERE CartID = ? AND MenuItemID = ?', [cartId, menuItemId]);
            
            // Optional: Check if cart is empty after deletion
            const [cartItems] = await pool.execute('SELECT * FROM CartItems WHERE CartID = ?', [cartId]);
            if (cartItems.length === 0) {
                // If cart is empty, you might want to delete the cart
                await pool.execute('DELETE FROM Carts WHERE CartID = ?', [cartId]);
            }

            return result; // Return the result of the deletion
        } catch (error) {
            console.error('Error deleting item from cart:', error);
            throw new Error('Error deleting item from cart');
        }
    },

    //Retrieve the current cart to show the user
    getCart: async (userId) => {
        try {
            const query = `
                SELECT ci.CartID, ci.MenuItemID, ci.Quantity, m.Name AS MenuItemName, m.Price
                FROM Carts c
                JOIN CartItems ci ON c.CartID = ci.CartID
                JOIN MenuItems m ON ci.MenuItemID = m.MenuItemID
                WHERE c.UserID = ?
            `;
            const [cartItems] = await pool.execute(query, [userId]);
            return cartItems;
        } catch (error) {
            console.error('Error fetching cart:', error);
            throw new Error('Error fetching cart');
        }
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
    }
    
};

module.exports = OrderRepository;
