const UserRepository = require('../repository/userRepository');

const UserModel = {
    createUser: (userData, callback) => {
        UserRepository.create(userData, callback);
    },

    findUserByEmail: (email, callback) => {
        UserRepository.findByEmail(email, callback);
    },

    findUserById: (id, callback) => {
        UserRepository.findById(id, callback);
    },

    getAllUsers: (callback) => {
        UserRepository.getAllUsers(callback);
    },

    deleteUserById: (id, callback) => {
        UserRepository.deleteById(id, callback);
    },

    updateUserById: (id, userData, callback) => {
        UserRepository.updateById(id, userData, callback);
    },
};

module.exports = UserModel;
