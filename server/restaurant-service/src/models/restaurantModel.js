const RestaurantRepository = require('../repository/restaurantRepository');

const RestaurantModel = {
    createRestaurant: async (restaurantData) => {
        return await RestaurantRepository.create(restaurantData);
    },

    findByRestaurantName: async (restaurantName) => {
        return await RestaurantRepository.findByRestaurantName(restaurantName);
    }
};

module.exports = RestaurantModel;