const RefreshTokenRepository = require('../repository/refreshTokenRepository');

const RefreshTokenModel = {
    createToken: async (tokenData) => {
        return await RefreshTokenRepository.createToken(tokenData);
    },

    findByTokenId: async (token) => {
        return await RefreshTokenRepository.findById(token);
    },

    deleteByToken: async (token, userId) => {
        return await RefreshTokenRepository.deleteByToken(token, userId);
    },

    deleteByUserId: async (requestingUserId, targetUserId, isAdmin) => {
        return await RefreshTokenRepository.deleteByUserId(requestingUserId, targetUserId, isAdmin);
    },

    deleteExpiredTokens: async () => {
        return await RefreshTokenRepository.deleteExpiredTokens();
    },
};

module.exports = RefreshTokenModel;
