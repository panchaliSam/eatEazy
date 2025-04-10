const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const OrderRepository = {
    // Add item to cart
    addToCart: async (userId, menuItemId, quantity) => {
        let cart = await prisma.cart.findFirst({
            where: { userId },
        });

        if (!cart) {
            cart = await prisma.cart.create({
                data: {
                    userId,
                },
            });
        }

        await prisma.cartItem.create({
            data: {
                cartId: cart.cartId,
                menuItemId,
                quantity,
            },
        });

        return { message: 'Item added to cart successfully' };
    },

    // Checkout from cart
    checkout: async (userId, restaurantId) => {
        const cart = await prisma.cart.findFirst({
            where: { userId },
            include: {
                items: {
                    include: { menuItem: true },
                },
            },
        });

        if (!cart || cart.items.length === 0) {
            throw new Error('Cart is empty!');
        }

        const orderTotal = cart.items.reduce((sum, item) => {
            return sum + item.quantity * item.menuItem.price;
        }, 0);

        const order = await prisma.order.create({
            data: {
                customerId: userId,
                restaurantId,
                orderStatus: 'Pending',
                orderTotal,
                orderDetails: {
                    create: cart.items.map((item) => ({
                        menuItemId: item.menuItemId,
                        quantity: item.quantity,
                        itemPrice: item.menuItem.price,
                    })),
                },
            },
        });

        // Clear the cart
        await prisma.cartItem.deleteMany({
            where: { cartId: cart.cartId },
        });

        return { message: 'Order placed successfully', orderId: order.orderId };
    },

    // Update cart
    updateCart: async (userId, menuItemId, quantity) => {
        let cart = await prisma.cart.findFirst({
            where: { userId },
        });

        if (!cart) {
            cart = await prisma.cart.create({ data: { userId } });
        }

        const existingItem = await prisma.cartItem.findFirst({
            where: {
                cartId: cart.cartId,
                menuItemId,
            },
        });

        if (existingItem) {
            return await prisma.cartItem.update({
                where: {
                    cartId_menuItemId: {
                        cartId: cart.cartId,
                        menuItemId,
                    },
                },
                data: { quantity },
            });
        } else {
            return await prisma.cartItem.create({
                data: {
                    cartId: cart.cartId,
                    menuItemId,
                    quantity,
                },
            });
        }
    },

    // Delete item from cart
    deleteCartItem: async (userId, menuItemId) => {
        const cart = await prisma.cart.findFirst({
            where: { userId },
        });

        if (!cart) throw new Error('Cart not found for the user');

        const deleted = await prisma.cartItem.delete({
            where: {
                cartId_menuItemId: {
                    cartId: cart.cartId,
                    menuItemId,
                },
            },
        });

        const remainingItems = await prisma.cartItem.findMany({
            where: { cartId: cart.cartId },
        });

        if (remainingItems.length === 0) {
            await prisma.cart.delete({
                where: { cartId: cart.cartId },
            });
        }

        return deleted;
    },

    // Get cart items
    getCart: async (userId) => {
        const cart = await prisma.cart.findFirst({
            where: { userId },
            include: {
                items: {
                    include: {
                        menuItem: true,
                    },
                },
            },
        });

        return cart?.items.map(item => ({
            cartId: item.cartId,
            menuItemId: item.menuItemId,
            quantity: item.quantity,
            menuItemName: item.menuItem.name,
            price: item.menuItem.price,
        })) || [];
    },

    // Get all orders
    getAllOrders: async () => {
        return await prisma.order.findMany();
    },

    // Find orders by customer
    findByCustomerId: async (customerId) => {
        return await prisma.order.findMany({
            where: { customerId },
        });
    },

    // Find order by ID
    findById: async (orderId) => {
        return await prisma.order.findUnique({
            where: { orderId },
        });
    },

    // Get order details with items
    getOrderDetails: async (orderId) => {
        return await prisma.order.findUnique({
            where: { orderId },
            include: {
                orderDetails: {
                    include: {
                        menuItem: true,
                    },
                },
            },
        });
    },

    // Get order status
    getOrderStatus: async (orderId) => {
        const order = await prisma.order.findUnique({
            where: { orderId },
            select: { orderStatus: true },
        });
        return order || { message: 'Order not found' };
    },

    // Update order status
    updateStatus: async (orderId, newStatus) => {
        return await prisma.order.update({
            where: { orderId },
            data: { orderStatus: newStatus },
        });
    },
};

module.exports = OrderRepository;
