const prisma = require('../config/prisma');

const RefreshRepository = {
    createToken: async (tokenData) => {
        const { token, userId, expiresAt } = tokenData;

        const expirationDate = new Date(expiresAt);
        if (isNaN(expirationDate.getTime())) {
            throw new Error('Invalid expiresAt value provided');
        }

        const newToken = await prisma.refreshTokens.create({
            data: {
                Token: token,
                UserID: userId,
                ExpiresAt: expirationDate,
            },
        });

        return newToken;
    },


    findById: async (token) => {
      const refreshToken = await prisma.refreshTokens.findUnique({
          where: {Token: token},
      })
        return refreshToken;
    },

    deleteByToken: async (token, userId) => {
        const refreshToken = await prisma.refreshTokens.findUnique({
            where: {
                Token: token,
                UserID: userId,
            },
        });

        if (!refreshToken || refreshToken.userId !== userId) {
            throw new Error('Unauthorized or token not found');
        }

        const deletedToken = await prisma.refreshTokens.delete({
            where: {
                Token: token,
                UserID: userId,
            },
        });

        return deletedToken;
    },

    deleteByUserId: async (requestingUserId, targetUserId, isAdmin) => {
        if (requestingUserId !== targetUserId && !isAdmin) {
            throw new Error('Unauthorized to delete tokens for this user');
        }

        const deletedTokens = await prisma.refreshTokens.deleteMany({
            where: { userId: targetUserId },
        });

        return deletedTokens;
    },

    deleteExpiredTokens: async () => {
        const now = new Date();
        const deletedTokens = await prisma.refreshTokens.deleteMany({
            where: {
                expiresAt: { lt: now },
            },
        });
        return deletedTokens;
    },
};

module.exports = RefreshRepository;