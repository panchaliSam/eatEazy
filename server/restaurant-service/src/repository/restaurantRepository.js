const prisma = require('../config/prisma');
const axios = require('axios');
const {API_GATEWAY_AUTH_SERVICE_URL} = require('../config/env');

const RestaurantRepository = {
    create: async (restaurantData) => {
        try {
            const { ownerId, restaurantName, address, phone, email, availability } = restaurantData;
            const restaurant = await prisma.restaurants.create({
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
        const restaurants = await prisma.restaurants.findMany({
            where: {
                RestaurantName: restaurantName
            }
        });
        return restaurants;
    },

    findById: async (id) => {
        try {
            const restaurant = await prisma.restaurants.findUnique({
                where: {
                    RestaurantID: parseInt(id)
                }
            });

            if (restaurant) {
                let owner = null;
                try {
                    const ownerResponse = await axios.get(`http://localhost:4000/auth/users/${restaurant.OwnerID}`);
                    owner = ownerResponse.data;
                } catch (error) {
                    console.error(`Error fetching owner details for OwnerID: ${restaurant.OwnerID}`, error.message);
                }

                return {
                    ...restaurant,
                    OwnerName: owner ? `${owner.Firstname} ${owner.Lastname}` : 'No Owner'
                };
            }

            return null;
        } catch (error) {
            console.error('Error in repository findById():', error);
            throw error;
        }
    },

    getAllRestaurants: async () => {
        const restaurants = await prisma.restaurants.findMany();

        return Promise.all(restaurants.map(async (restaurant) => {
            let owner = null;
            try {
                const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJhbWFsUGVyZXJhQGV4YW1wbGUuY29tIiwicm9sZSI6IlJlc3RhdXJhbnQiLCJpYXQiOjE3NDQyOTU4MDYsImV4cCI6MTc0NDI5OTQwNn0.vp_PZamGnZr7IlxQJAfOxVxglj50n6la0r_a1-vuEjI';  // Replace with the actual token

                const ownerResponse = await axios.get(`http://localhost:4000/auth/users/${restaurant.OwnerID}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                owner = ownerResponse.data;
                console.log(owner);
            } catch (error) {
                console.error(`Error fetching owner details for OwnerID: ${restaurant.OwnerID}`, error.message);
            }
            return {
                ...restaurant,
                OwnerName: owner ? `${owner.Firstname} ${owner.Lastname}` : 'No Owner'
            };
        }));
    },

    deleteById: async (id) => {
        const deleted = await prisma.restaurants.delete({
            where: {
                RestaurantID: id
            }
        });
        return deleted;
    },

    updateById: async (id, restaurantData) => {
        const { restaurantName, address, phone, email, availability } = restaurantData;
        const updated = await prisma.restaurants.update({
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
