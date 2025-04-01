const MenuRepository = require('../repository/menuRepository');

const MenuModel = {
    createMenuItem: async (menuItemData) => {
        return await MenuRepository.create(menuItemData);
    },

    getMenuItemsByRestaurantId: async (restaurantId) => {
        return await MenuRepository.getAllMenuItemsByRestaurantId(restaurantId);
    },

    getMenuItemById: async (menuItemId) => {
        return await MenuRepository.findByMenuItemId(menuItemId);
    },

    updateMenuItemById: async (id, menuItemData) => {
        return await MenuRepository.updateById(id, menuItemData);
    },

    deleteMenuItemById: async (id) => {
        return await MenuRepository.deleteById(id);
    }
};

module.exports = MenuModel;
