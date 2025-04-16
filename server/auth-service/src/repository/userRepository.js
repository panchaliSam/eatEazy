const prisma = require('../config/prisma');

const UserRepository = {
    create: async (userData) => {
        const { firstname, lastname, email, passwordHash, phone, role } = userData;
        const newUser = await prisma.users.create({
            data: {
                Firstname: firstname,
                Lastname: lastname,
                Email: email,
                PasswordHash: passwordHash,
                Phone: phone,
                Role: role,
            },
        });
        return newUser;
    },

    findByEmail: async (email) => {
        const user = await prisma.users.findUnique({
            where: { Email: email },
        });
        return user;
    },

    findById: async (id) => {
        const user = await prisma.users.findUnique({
            where: { UserID: parseInt(id) },
        });
        return user;
    },

    getAllUsers: async () => {
        const users = await prisma.users.findMany({
            select: {
                UserID: true,
                Firstname: true,
                Lastname: true,
                Email: true,
                Phone: true,
                Role: true,
            },
        });
        return users;
    },

    deleteById: async (id) => {
        const deletedUser = await prisma.users.delete({
            where: { UserID: parseInt(id) },
        });
        return deletedUser;
    },

    updateById: async (id, userData) => {
        try {
            const updatedUser = await prisma.users.update({
                where: {UserID: parseInt(id)},
                data: {
                    Firstname: userData.firstname,
                    Lastname: userData.lastname,
                    Email: userData.email,
                    Phone: userData.phone,
                    //Role: userData.role,
                },
            });
            console.log(updatedUser);
            return updatedUser;
        } catch (error) {
            console.error('Error updating user:', error);
            throw new Error('Database update failed.');
        }
    }
};

module.exports = UserRepository;
