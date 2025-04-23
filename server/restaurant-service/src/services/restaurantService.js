const RestaurantModel = require("../models/restaurantModel");

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

//Get all restaurants
const getAllRestaurants = async () => {
    return await RestaurantModel.getAllRestaurants();
};

//Get all restaurants by id
const getRestaurantById = async (id) => {
    return await RestaurantModel.findByRestaurantId(id);
};

//Delete restaurant by id
const deleteRestaurantById = async (id) => {
    return await RestaurantModel.deleteRestaurantById(id);
};

//Update restaurant by id
const updateRestaurantById = async (id, restaurantData) => {
    return await RestaurantModel.updateRestaurantById(id, restaurantData);
}

module.exports = {registerRestaurant, getAllRestaurants, getRestaurantById, deleteRestaurantById, updateRestaurantById};