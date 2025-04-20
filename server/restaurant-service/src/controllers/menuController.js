const MenuService = require("../services/menuService");

const createMenuItem = async (req, res) => {
  try {
    const { name, description, price, isAvailable } = req.body;
    const { restaurantId } = req.params;

    if (
      !restaurantId ||
      !name ||
      !description ||
      price === undefined ||
      isAvailable === undefined
    ) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    const newMenuItem = await MenuService.createMenuItem({
      restaurantId,
      name,
      description,
      price,
      isAvailable,
    });

    res.status(201).json({
      message: "Menu item created successfully",
      menuItemId: newMenuItem,
    });
  } catch (error) {
    console.error("Error creating menu item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getMenuItemsByRestaurantId = async (req, res) => {
  try {
    const menuItems = await MenuService.getMenuItemsByRestaurantId(
      req.params.restaurantId
    );
    res.status(200).json(menuItems);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getMenuItemById = async (req, res) => {
  try {
    const menuItem = await MenuService.getMenuItemById(req.params.menuItemId);
    if (!menuItem) {
      return res.status(404).json({ message: "Menu item not found" });
    }
    res.status(200).json(menuItem);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateMenuItemById = async (req, res) => {
  try {
    await MenuService.updateMenuItemById(
      req.params.menuItemId,
      req.user.id,
      req.body
    );
    res.status(200).json({ message: "Menu item updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteMenuItemById = async (req, res) => {
  try {
    await MenuService.deleteMenuItemById(req.params.menuItemId, req.user.id);
    res.status(200).json({ message: "Menu item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createMenuItem,
  getMenuItemsByRestaurantId,
  getMenuItemById,
  updateMenuItemById,
  deleteMenuItemById,
};
