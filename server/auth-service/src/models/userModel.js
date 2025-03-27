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
};

module.exports = UserModel;
