const { default: mongoose } = require('mongoose');
const Dish = require('../models/dishModel');

// @desc Create a new dish
// @route POST /api/dishes
// @access Public
const createDish = async (req, res) => {
  try {
    const { name, price, description, image, restaurantId, ingredients, flavors, sauces, category, offer } = req.body;

    if (!restaurantId) {
      return res.status(400).json({ message: 'restaurantId is required' });
    }

    const dish = new Dish({ 
      name, 
      price, 
      description, 
      image, 
      restaurantId: new mongoose.Types.ObjectId(restaurantId),
      ingredients,
      flavors,
      sauces,
      category,
      offer
    });

    const savedDish = await dish.save();
    res.status(201).json(savedDish);
  } catch (error) {
    res.status(400).json({ message: 'Failed to create dish', error: error.message });
  }
};


// @desc Get all dishes
// @route GET /api/dishes
// @access Public
const getAllDishes = async (req, res) => {
    try {
      const { restaurantId } = req.query;
  
      const filter = restaurantId ? { restaurantId } : {};
  
      const dishes = await Dish.find(filter);
      res.json(dishes);
    } catch (error) {
      res.status(500).json({ message: 'Failed to fetch dishes', error: error.message });
    }
  };



  const getAllDishesByResturantId = async (req, res) => {
    const { restaurantId } = req.params;
    console.log("HERE==>", restaurantId)
    try {
      const dishes = await Dish.find({ restaurantId });
      res.status(200).json(dishes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error' });
    }
  };
// @desc Get a single dish by ID
// @route GET /api/dishes/:id
// @access Public
const getDishById = async (req, res) => {
  try {
    const dish = await Dish.findById(req.params.id);
    if (dish) {
      res.json(dish);
    } else {
      res.status(404).json({ message: 'Dish not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to get dish', error: error.message });
  }
};

// @desc Update a dish
// @route PUT /api/dishes/:id
// @access Public
const updateDish = async (req, res) => {
  try {
    const updatedDish = await Dish.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    if (updatedDish) {
      res.json(updatedDish);
    } else {
      res.status(404).json({ message: 'Dish not found' });
    }
  } catch (error) {
    res.status(400).json({ message: 'Failed to update dish', error: error.message });
  }
};

// @desc Delete a dish
// @route DELETE /api/dishes/:id
// @access Public
const deleteDish = async (req, res) => {
  try {
    const deletedDish = await Dish.findByIdAndDelete(req.params.id);

    if (deletedDish) {
      res.json({ message: 'Dish deleted successfully' });
    } else {
      res.status(404).json({ message: 'Dish not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete dish', error: error.message });
  }
};

module.exports = {
  createDish,
  getAllDishes,
  getDishById,
  updateDish,
  deleteDish,
  getAllDishesByResturantId
};
