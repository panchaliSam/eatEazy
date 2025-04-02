const pool = require('../config/db');

const RestaurantRepository = {
    create: async (restaurantData) => {
        const { ownerId, restaurantName, address, phone, email, availability } = restaurantData;
        const query = 'INSERT INTO Restaurants (OwnerID, RestaurantName, Address, Phone, Email, Availability) VALUES (?, ?, ?, ?, ?, ?)';
        const [result] = await pool.execute(query, [ownerId, restaurantName, address, phone, email, availability]);
        return result.insertId;
    },

    findByRestaurantName: async (restaurantName) => {
        const query = 'SELECT * FROM Restaurants WHERE RestaurantName = ?';
        const [rows] = await pool.execute(query, [restaurantName]);
        return rows;
    },

    findById: async (id) => {
        const query = 'SELECT * FROM Restaurants WHERE RestaurantID = ?';
        const [rows] = await pool.execute(query, [id]);
        return rows.length > 0 ? rows[0] : null;
    },

    getAllRestaurants: async () => {
        const query = 'SELECT * FROM Restaurants';
        const [rows] = await pool.execute(query);
        return rows;
    },

    deleteById: async(id) => {
        const query  = 'DELETE FROM Restaurants WHERE RestaurantID = ?';
        const [result] = await pool.execute(query, [id]);
        return result;
    },

    updateById: async (id, restaurantData) => {
        const { restaurantName, address, phone, email, availability } = restaurantData;
        const query = 'UPDATE Restaurants SET RestaurantName = ?, ADDRESS = ?,  Phone= ?, Email = ?, Availability = ? WHERE RestaurantID = ?';
        const [result] = await pool.execute(query, [restaurantName, address, phone, email, availability, id]);
        return result;
    }
}

module.exports = RestaurantRepository;