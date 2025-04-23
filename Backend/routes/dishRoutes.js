const express = require('express');
const router = express.Router();
const {
  createDish,
  getAllDishes,
  getDishById,
  updateDish,
  deleteDish
} = require('../controllers/dishController');

// Create a new dish
router.post('/', createDish);

// Get all dishes
router.get('/', getAllDishes);

// Get a dish by ID
router.get('/:id', getDishById);

// Update a dish by ID
router.put('/:id', updateDish);

// Delete a dish by ID
router.delete('/:id', deleteDish);

module.exports = router;
