const MenuModel = require('../models/menuModel');
const RestaurantModel = require('../models/restaurantModel');

const createMenuItem = async (menuItemData) => {
    const { restaurantId, name } = menuItemData;

    const restaurantExists = await RestaurantModel.findByRestaurantId(restaurantId);
    if (!restaurantExists) {
        throw new Error("Restaurant not found");
    }

    const existingMenuItem = await MenuModel.getMenuItemsByRestaurantId(restaurantId);
    const menuItemExists = existingMenuItem.some(item => item.Name.toLowerCase() === name.toLowerCase());

    if (menuItemExists) {
        throw new Error("Menu item with the same name already exists for this restaurant");
    }

    return await MenuModel.createMenuItem(menuItemData);
}

const getMenuItemsByRestaurantId = async (restaurantId) => {
    return await MenuModel.getMenuItemsByRestaurantId(restaurantId);
};

const updateMenuItemById = async (menuItemId, userId, menuItemData) => {
    const menuItem = await MenuModel.getMenuItemById(menuItemId);

    if (!menuItem) {
        throw new Error('Menu item not found');
    }

    const restaurant = await RestaurantModel.findByRestaurantId(menuItem.RestaurantID);

    if (!restaurant || Number(restaurant.OwnerID) !== Number(userId)) {
        throw new Error('Access Denied: You are not the owner of this restaurant');
    }

    return await MenuModel.updateMenuItemById(menuItemId, menuItemData);
};

const deleteMenuItemById = async (menuItemId, userId) => {
    const menuItem = await MenuModel.getMenuItemById(menuItemId);

    if (!menuItem) {
        throw new Error('Menu item not found');
    }

    const restaurant = await RestaurantModel.findByRestaurantId(menuItem.RestaurantID);

    if (!restaurant || Number(restaurant.OwnerID) !== Number(userId)) {
        throw new Error('Access Denied: You are not the owner of this restaurant');
    }

    return await MenuModel.deleteMenuItemById(menuItemId);
};

module.exports = {
    createMenuItem,
    getMenuItemsByRestaurantId,
    updateMenuItemById,
    deleteMenuItemById
};
