const RestaurantService = require('../services/restaurantService');

//Register new restaurant
const registerRestaurant = async (req, res) => {
    try {
        console.log('User Info:', req.user);

        const restaurantData = { ...req.body, ownerId: req.user.id };
        const restaurantID = await RestaurantService.registerRestaurant(restaurantData);
        res.status(201).json({ message: 'Restaurant added successfully', restaurantID });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

module.exports = { registerRestaurant };
