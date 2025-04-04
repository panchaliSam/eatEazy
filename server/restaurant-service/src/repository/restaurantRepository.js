const prisma = require('../config/prisma');

const RestaurantRepository = {
    create: async (restaurantData) => {
        try {
            const { ownerId, restaurantName, address, phone, email, availability } = restaurantData;
            const restaurant = await prisma.restaurant.create({
                data: {
                    OwnerID: ownerId,
                    RestaurantName: restaurantName,
                    Address: address,
                    Phone: phone,
                    Email: email,
                    Availability: availability
                }
            });
            return restaurant.RestaurantID;
        } catch (error) {
            console.error('Error in repository create():', error);
            throw error;
        }
    },


    findByRestaurantName: async (restaurantName) => {
        const restaurants = await prisma.restaurant.findMany({
            where: {
                RestaurantName: restaurantName
            }
        });
        return restaurants;
    },

    findById: async (id) => {
        const restaurant = await prisma.restaurant.findUnique({
            where: {
                RestaurantID: parseInt(id)
            }
        });
        return restaurant;
    },

    getAllRestaurants: async () => {
        const restaurants = await prisma.restaurant.findMany();
        return restaurants;
    },

    deleteById: async (id) => {
        const deleted = await prisma.restaurant.delete({
            where: {
                RestaurantID: id
            }
        });
        return deleted;
    },

    updateById: async (id, restaurantData) => {
        const { restaurantName, address, phone, email, availability } = restaurantData;
        const updated = await prisma.restaurant.update({
            where: {
                RestaurantID: id
            },
            data: {
                RestaurantName: restaurantName,
                Address: address,
                Phone: phone,
                Email: email,
                Availability: availability
            }
        });
        return updated;
    }
};

module.exports = RestaurantRepository;
