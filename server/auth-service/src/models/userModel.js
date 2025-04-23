const UserRepository = require('../repository/userRepository');

const UserModel = {
    createUser: async (userData) => {
        return await UserRepository.create(userData);
    },

    findUserByEmail: async (email) => {
        return await UserRepository.findByEmail(email);
    },

    findUserById: async (id) => {
        return await UserRepository.findById(id);
    },

    getAllUsers: async () => {
        return await UserRepository.getAllUsers();
    },

    getAllDrivers: async () => {
        return await UserRepository.getAllDrivers();
    },

    deleteUserById: async (id) => {
        return await UserRepository.deleteById(id);
    },

    updateUserById: async (id, userData) => {
        return await UserRepository.updateById(id, userData);
    },
};

module.exports = UserModel;
