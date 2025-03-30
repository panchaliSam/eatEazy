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

    findById: async(id) => {
        const query = 'SELECT * FROM Restaurants WHERE RestaurantId = ?';
        const [rows] = await pool.execute(query, [id]);
        return rows;
    },

    getAllRestaurants: async () => {
        const query = 'SELECT * FROM Restaurants';
        const [rows] = await pool.execute(query);
        return rows;
    },

    deleteBuId: async(id, restaurantData) => {
        const query  = 'DELETE FROM Restaurants WHERE RestaurantId = ?';
        const [result] = await pool.execute(query, [id]);
        return result;
    },

    updateById: async (id, restaurantData) => {
        const { restaurantName, address, phone, email, avatar } = restaurantData;
        const query = 'UPDATE Restaurants SET RestaurantName = ?, ADDRESS = ?,  Phone= ?, Email = ?, Availability = ? WHERE RestaurantId = ?';
        const [result] = await pool.execute(query, [id, restaurantName, address, phone, email, availability]);
        return result;
    }
}

module.exports = RestaurantRepository;