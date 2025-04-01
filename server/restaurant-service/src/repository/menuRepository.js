const pool = require('../config/db');

const MenuRepository = {
    create: async(menuData) => {
        const { restaurantId, name, description, price, isAvailable } = menuData;

        console.log("Received menuData:", menuData); // Debugging line

        if (!restaurantId || !name || !description || price === undefined || isAvailable === undefined) {
            console.error("Error: Missing required fields", { restaurantId, name, description, price, isAvailable });
            throw new Error("Missing required fields for menu item creation.");
        }

        const query = 'INSERT INTO MenuItems (RestaurantID, Name, Description, Price, IsAvailable) VALUES (?, ?, ?, ?, ?)';
        const [result] = await pool.execute(query, [restaurantId, name, description, price, isAvailable]);
        return result.insertId;
    },

    getAllMenuItemsByRestaurantId: async(restaurantId) => {
        const query = 'SELECT * FROM MenuItems WHERE RestaurantID = ?;';
        const [rows] = await pool.execute(query, [restaurantId]);
        return rows;
    },

    findById: async(id) => {
        const query = 'SELECT * FROM MenuItems WHERE RestaurantID = ?;';
        const [rows] = await pool.execute(query, [id]);
        return rows.length > 0 ? rows[0] : null;
    },

    findByMenuItemId: async(id) => {
        const query = 'SELECT * FROM MenuItems WHERE MenuItemID = ?;';
        const [rows] = await pool.execute(query, [id]);
        return rows.length > 0 ? rows[0] : null;
    },

    updateById: async (id, menuItemData) => {
        const { name, description, price, isAvailable } = menuItemData;
        const query = 'UPDATE MenuItems SET Name = ?, Description = ?, Price = ?, IsAvailable = ? WHERE MenuItemID = ?';
        const [result] = await pool.execute(query, [name, description, price, isAvailable, id]);
        return result;
    },

    deleteById: async (id) => {
        const query = 'DELETE FROM MenuItems WHERE MenuItemID = ?';
        const [result] = await pool.execute(query, [id]);
        return result;
    }
};

module.exports = MenuRepository;