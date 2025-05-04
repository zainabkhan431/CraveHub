const express = require('express');
const { createRestaurant, getRestaurants, getRestaurantById, getRestaurantsByCategory, updateRestaurant, deleteRestaurant, getRestaurantMenu } = require('../controllers/restaurantControllers.js');

const router = express.Router();

// @route POST /api/restaurants
// @desc Create a new restaurant
// @access Public
router.post('/', createRestaurant);
router.get('/', getRestaurants);
router.get('/category/:category', getRestaurantsByCategory); // moved up!
router.get('/:id', getRestaurantById);
router.put('/:id', updateRestaurant);
router.delete('/:id', deleteRestaurant);
router.get('/:id/menu', getRestaurantMenu);

module.exports = router;
