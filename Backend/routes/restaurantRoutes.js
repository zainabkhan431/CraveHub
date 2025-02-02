const express = require('express');
const { createRestaurant,  getRestaurants,getRestaurantById,updateRestaurant,
    deleteRestaurant,getRestaurantMenu } = require('../controllers/restaurantControllers.js');
const router = express.Router();

// @route POST /api/restaurants
// @desc Create a new restaurant
// @access Public
router.post('/', createRestaurant)
router.get('/', getRestaurants);
router.get('/:id', getRestaurantById);
router.put('/:id', updateRestaurant);
router.delete('/:id', deleteRestaurant);

// Get dishes of a restaurant
router.get('/:id/menu', getRestaurantMenu);



module.exports = router;
