const RestaurantRepository = require('../repository/restaurantRepository');

const RestaurantModel = {
    createRestaurant: async (restaurantData) => {
        return await RestaurantRepository.create(restaurantData);
    },

    findByRestaurantName: async (restaurantName) => {
        return await RestaurantRepository.findByRestaurantName(restaurantName);
    },

    findByRestaurantId: async (restaurantId) => {
        return await RestaurantRepository.findById(restaurantId);
    },

    getAllRestaurants: async () => {
        return await RestaurantRepository.getAllRestaurants();
    },

    deleteRestaurantById: async (id) => {
        return await RestaurantRepository.deleteById(id);
    },

    updateRestaurantById: async (id, restaurantData) => {
        return await RestaurantRepository.updateById(id, restaurantData);
    }
};

module.exports = RestaurantModel;