const RestaurantModel = require("../models/RestaurantModel");

//Register a new restaurant
const registerRestaurant = async (restaurantData) => {
    const { restaurantName, address, phone, email, availability } = restaurantData;

    const existingRestaurant = await RestaurantModel.findByRestaurantName(restaurantName);
    if (existingRestaurant.length > 0) {
        throw new Error(`Restaurant already exists`);
    }

    const newRestaurant = {
        ownerId: restaurantData.ownerId,
        restaurantName,
        address,
        phone,
        email,
        availability
    };
    const restaurantID = await RestaurantModel.createRestaurant(newRestaurant);
    return restaurantID;
};

module.exports = {registerRestaurant};