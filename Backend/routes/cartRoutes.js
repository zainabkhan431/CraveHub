const express = require('express');
const router = express.Router();
const {
  getCart,
  addItemToCart,
  removeItemFromCart,
  clearCart,
} = require('../controllers/cartController');

// Get cart for a user
router.get('/cart/:userId', getCart);

// Add an item to the cart
router.post('/cart', addItemToCart);

// Remove an item from the cart
router.delete('/cart/item', removeItemFromCart);

// Clear the cart
router.delete('/cart/:userId', clearCart);

module.exports = router;
