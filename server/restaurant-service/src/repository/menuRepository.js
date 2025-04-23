const prisma = require("../config/prisma");

const MenuRepository = {
  create: async (menuData) => {
    const { restaurantId, name, description, price, isAvailable } = menuData;

    console.log("Received menuData:", menuData); // Debugging line

    if (
      !restaurantId ||
      !name ||
      !description ||
      price === undefined ||
      isAvailable === undefined
    ) {
      console.error("Error: Missing required fields", {
        restaurantId,
        name,
        description,
        price,
        isAvailable,
      });
      throw new Error("Missing required fields for menu item creation.");
    }

    const menuItem = await prisma.menuItems.create({
      data: {
        RestaurantID: parseInt(restaurantId),
        Name: name,
        Description: description,
        Price: price,
        IsAvailable: isAvailable,
      },
    });

    return menuItem.MenuItemID;
  },

  getAllMenuItemsByRestaurantId: async (restaurantId) => {
    const menuItems = await prisma.menuItems.findMany({
      where: {
        RestaurantID: parseInt(restaurantId),
      },
    });
    return menuItems;
  },

  findByMenuItemId: async (id) => {
    const menuItem = await prisma.menuItems.findUnique({
      where: {
        MenuItemID: parseInt(id),
      },
    });
    return menuItem;
  },

  updateById: async (id, menuItemData) => {
    const { name, description, price, isAvailable } = menuItemData;

    const updatedItem = await prisma.menuItems.update({
      where: {
        MenuItemID: id,
      },
      data: {
        Name: name,
        Description: description,
        Price: price,
        IsAvailable: isAvailable,
      },
    });

    return updatedItem;
  },

  deleteById: async (id) => {
    const deletedItem = await prisma.menuItems.delete({
      where: {
        MenuItemID: id,
      },
    });

    return deletedItem;
  },
};

module.exports = MenuRepository;
