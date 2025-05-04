const express = require('express');
const router = express.Router();
const {
  createDish,
  getAllDishes,
  getDishById,
  updateDish,
  deleteDish,
  getAllDishesByResturantId
} = require('../controllers/dishController');

// Create a new dish
router.post('/', createDish);

// Get all dishes
router.get('/', getAllDishes);

// Get a dish by ID
router.get('/:id', getDishById);

router.get('/resturant/:restaurantId', getAllDishesByResturantId);

// Update a dish by ID
router.put('/:id', updateDish);

// Delete a dish by ID
router.delete('/:id', deleteDish);

module.exports = router;
