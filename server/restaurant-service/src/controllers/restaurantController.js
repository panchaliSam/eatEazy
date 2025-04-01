const RestaurantService = require('../services/restaurantService');

// Register new restaurant
const registerRestaurant = async (req, res) => {
    try {
        if (req.user.role !== 'Restaurant') {
            return res.status(403).json({ message: 'Access Denied: Only users with a Restaurant role can register a restaurant' });
        }

        console.log('User Info:', req.user);
        const restaurantData = { ...req.body, ownerId: req.user.id };
        const restaurantID = await RestaurantService.registerRestaurant(restaurantData);
        res.status(201).json({ message: 'Restaurant added successfully', restaurantID });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};


// Get all restaurants
const getAllRestaurants = async (req, res) => {
    try {
        const restaurants = await RestaurantService.getAllRestaurants();
        res.status(200).json(restaurants);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Get restaurant by ID
const getRestaurantById = async (req, res) => {
    try {
        const restaurant = await RestaurantService.getRestaurantById(req.params.id);
        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }
        res.status(200).json(restaurant);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};

// Update restaurant by ID
const updateRestaurantById = async (req, res) => {
    try {
        const restaurant = await RestaurantService.getRestaurantById(req.params.id);

        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        // Debugging: Log User ID and Owner ID to check types
        console.log('User ID:', req.user.id, typeof req.user.id);
        console.log('Owner ID:', restaurant.OwnerID, typeof restaurant.OwnerID);

        // Ensure only the restaurant owner can delete (fix type mismatch)
        if (req.user.role !== 'Restaurant' || Number(req.user.id) !== Number(restaurant.OwnerID)){
            return res.status(403).json({ message: 'Access Denied: You are not the owner of this restaurant' });
        }

        const updatedRestaurant = await RestaurantService.updateRestaurantById(req.params.id, req.body);
        res.status(200).json({ message: 'Restaurant updated successfully', updatedRestaurant });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};


// Delete restaurant by ID
const deleteRestaurantById = async (req, res) => {
    try {
        const restaurant = await RestaurantService.getRestaurantById(req.params.id);

        if (!restaurant) {
            return res.status(404).json({ message: 'Restaurant not found' });
        }

        // Debugging: Log User ID and Owner ID to check types
        console.log('User ID:', req.user.id, typeof req.user.id);
        console.log('Owner ID:', restaurant.OwnerID, typeof restaurant.OwnerID);

        // Ensure only the restaurant owner can delete (fix type mismatch)
        if (req.user.role !== 'Restaurant' || Number(req.user.id) !== Number(restaurant.OwnerID)) {
            return res.status(403).json({ message: 'Access Denied: You are not the owner of this restaurant' });
        }

        await RestaurantService.deleteRestaurantById(req.params.id);
        res.status(200).json({ message: 'Restaurant deleted successfully' });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Server Error', error: err.message });
    }
};



module.exports = {
    registerRestaurant,
    getAllRestaurants,
    getRestaurantById,
    deleteRestaurantById,
    updateRestaurantById
};
