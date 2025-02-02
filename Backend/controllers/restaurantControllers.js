const Restaurant = require('../models/restaurantModel.js');
const Dish = require('../models/dishModel'); // Import the Dish model

// @desc Create a new restaurant
// @route POST /api/restaurants
// @access Public (can be restricted to admin later if needed)
const createRestaurant = async (req, res) => {
  const { name, image, description, rating, location, menuDishes,phoneNo } = req.body;

  // Check if the restaurant already exists
  const restaurantExists = await Restaurant.findOne({ name });
  if (restaurantExists) {
    return res.status(400).json({ message: 'Restaurant already exists' });
  }

  try {
    // Create dishes and save them to the database first
    const dishIds = await Promise.all(
      menuDishes.map(async (dishData) => {
        const dish = new Dish(dishData); // Create a new dish from the incoming data
        const savedDish = await dish.save();
        return savedDish._id; // Return the dish _id to reference later
      })
    );

    // Create the restaurant, referencing the dishes by their _ids
    const restaurant = new Restaurant({
      name,
      image,
      description,
      rating,
      location,
      phoneNo,
      menu: dishIds, // Store dish IDs in the menu
    });

    // Save restaurant to the database
    const createdRestaurant = await restaurant.save();
    res.status(201).json(createdRestaurant);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc Get a restaurant by ID
// @route GET /api/restaurants/:id
// @access Public
const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id).populate('menu'); // Populate the menu with dishes

    if (restaurant) {
      res.json(restaurant);
    } else {
      res.status(404).json({ message: 'Restaurant not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc Get all restaurants
// @route GET /api/restaurants
// @access Public
const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find().populate('menu'); // Fetch all restaurants with populated menu

    res.json(restaurants);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc Get the menu of a specific restaurant
// @route GET /api/restaurants/:id/menu
// @access Public
const getRestaurantMenu = async (req, res) => {
  const { id } = req.params;
  try {
    const restaurant = await Restaurant.findById(id).select('menu').populate('menu'); // Populate the menu with dishes

    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }

    res.json(restaurant.menu); // Return the populated menu
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc Update a restaurant
// @route PUT /api/restaurants/:id
// @access Public
const updateRestaurant = async (req, res) => {
  const { name, image, description, rating, location, menuDishes } = req.body;

  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (restaurant) {
      // If menuDishes are provided, update them
      let dishIds = restaurant.menu; // Keep existing menu items
      if (menuDishes) {
        const newDishIds = await Promise.all(
          menuDishes.map(async (dishData) => {
            const dish = new Dish(dishData);
            const savedDish = await dish.save();
            return savedDish._id;
          })
        );
        dishIds = [...new Set([...dishIds, ...newDishIds])]; // Merge old and new dishes without duplicates
      }

      restaurant.name = name || restaurant.name;
      restaurant.image = image || restaurant.image;
      restaurant.description = description || restaurant.description;
      restaurant.rating = rating || restaurant.rating;
      restaurant.location = location || restaurant.location;
      restaurant.menu = dishIds; // Update menu with new dishes

      const updatedRestaurant = await restaurant.save();
      res.json(updatedRestaurant);
    } else {
      res.status(404).json({ message: 'Restaurant not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

// @desc Delete a restaurant
// @route DELETE /api/restaurants/:id
// @access Public
const deleteRestaurant = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);

    if (restaurant) {
      await restaurant.remove();
      res.json({ message: 'Restaurant removed' });
    } else {
      res.status(404).json({ message: 'Restaurant not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
};

module.exports = {
  getRestaurants,
  createRestaurant,
  getRestaurantById,
  deleteRestaurant,
  updateRestaurant,
  getRestaurantMenu
};
