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
    }
}

module.exports = RestaurantRepository;