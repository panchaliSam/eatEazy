const RestaurantRepository = require("../repository/restaurantRepository");

// Register new restaurant
const registerRestaurant = async (req, res) => {
  try {
    if (req.user.role !== "Restaurant") {
      return res
        .status(403)
        .json({
          message:
            "Access Denied: Only users with a Restaurant role can register a restaurant",
        });
    }

    console.log("User Info:", req.user);
    const restaurantData = { ...req.body, ownerId: req.user.id };
    const restaurantID = await RestaurantRepository.create(restaurantData);
    res
      .status(201)
      .json({ message: "Restaurant added successfully", restaurantID });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Get all restaurants
const getAllRestaurants = async (req, res) => {
  try {
    const token = req.header("Authorization").split(" ")[1];
    const restaurants = await RestaurantRepository.getAllRestaurants(token);
    res.json(restaurants);
  } catch (error) {
    console.error("Error in getAllRestaurants:", error);
    res.status(500).json({ message: "Error fetching restaurants" });
  }
};

// Get restaurant by ID
const getRestaurantById = async (req, res) => {
  try {
    const token = req.header("Authorization").split(" ")[1];
    const restaurantId = req.params.restaurantId;

    if (!restaurantId) {
      return res.status(400).json({ message: "Restaurant ID is required" });
    }

    const restaurant = await RestaurantRepository.findById(restaurantId, token);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    console.log("User Info:", req.user);
    console.log("Fetched Restaurant:", restaurant);

    // Ensure type consistency for comparison
    if (
      req.user.role !== "Restaurant" ||
      Number(req.user.id) !== Number(restaurant.OwnerID)
    ) {
      return res
        .status(403)
        .json({
          message: "Access Denied: You are not the owner of this restaurant",
        });
    }

    res.status(200).json(restaurant);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Update restaurant by ID
const updateRestaurantById = async (req, res) => {
  try {
    const restaurant = await RestaurantRepository.findById(
      req.params.restaurantId
    );

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    // Ensure only the restaurant owner can update
    if (
      req.user.role !== "Restaurant" ||
      Number(req.user.id) !== Number(restaurant.OwnerID)
    ) {
      return res
        .status(403)
        .json({
          message: "Access Denied: You are not the owner of this restaurant",
        });
    }

    const updatedRestaurant = await RestaurantRepository.updateById(
      req.params.restaurantId,
      req.body
    );
    res
      .status(200)
      .json({ message: "Restaurant updated successfully", updatedRestaurant });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Delete restaurant by ID
const deleteRestaurantById = async (req, res) => {
  try {
    const restaurant = await RestaurantRepository.findById(
      req.params.restaurantId
    );

    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }

    // Ensure only the restaurant owner can delete
    if (
      req.user.role !== "Restaurant" ||
      Number(req.user.id) !== restaurant.OwnerID
    ) {
      return res
        .status(403)
        .json({
          message: "Access Denied: You are not the owner of this restaurant",
        });
    }

    await RestaurantRepository.deleteById(req.params.restaurantId);
    res.status(200).json({ message: "Restaurant deleted successfully" });
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

module.exports = {
  registerRestaurant,
  getAllRestaurants,
  getRestaurantById,
  deleteRestaurantById,
  updateRestaurantById,
};
