const Cart = require('../models/cartSchema'); // assuming you have this cart model
const Dish = require('../models/dishModel'); // assuming you have a Dish model
const mongoose = require('mongoose');
// @desc Get user's cart
// @route GET /api/cart/:userId
// @access Private (only accessible by authenticated users)
const getCart = async (req, res) => {
    try {
      const { userId } = req.params; // Get the userId from the URL parameters
  
      // Find the cart for the given userId and populate the 'dish' field of each item
      console.log('Cart items with dishIds:', cart.items);
      const cart = await Cart.findOne({ user: userId })
        .populate({
          path: 'items.dish',
          model: 'Dish', // Ensure this is pointing to the correct model
        })
        .exec();
        
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found for this user.' });
      }
  
      // Return the populated cart data
      res.status(200).json(cart);
    } catch (err) {
      console.error('Error fetching cart:', err);
      res.status(500).json({ message: 'Server error.' });
    }
  };
  
  
  const addItemToCart = async (req, res) => {
    const { userId, dishId, quantity } = req.body;
  
    try {
      // Validate if dishId is a valid ObjectId
      if (!mongoose.Types.ObjectId.isValid(dishId)) {
        return res.status(400).json({ message: 'Invalid dishId provided' });
      }
  
      let cart = await Cart.findOne({ user: userId });
  
      if (!cart) {
        // If no cart exists for the user, create one
        cart = new Cart({ user: userId, items: [] });
      }
  
      // Convert dishId to ObjectId using 'new' keyword
      const dishObjectId = new mongoose.Types.ObjectId(dishId); // Use 'new' here
  
      // Check if the item already exists in the cart
      const existingItem = cart.items.find(item => item.dish.toString() === dishObjectId.toString());
  
      if (existingItem) {
        // If the item exists, update the quantity
        existingItem.quantity += quantity;
      } else {
        // If it's a new item, add it to the cart
        cart.items.push({ dish: dishObjectId, quantity });
      }
  
      await cart.save();
      res.json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };
  
  

  
  const removeItemFromCart = async (req, res) => {
    const { userId, dishId } = req.body; 
    try {
      const cart = await Cart.findOne({ user: userId });
  
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
  
 
      cart.items = cart.items.filter(item => item.dish.toString() !== dishId);
  
      await cart.save();
      res.json(cart);
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };

  
  
  const clearCart = async (req, res) => {
    const { userId } = req.params; 
    try {
      const cart = await Cart.findOne({ user: userId });
  
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
  
      cart.items = [];
      await cart.save();
      res.json(cart);
    } catch (error) {
      res.status(500).json({ message: 'Server Error', error: error.message });
    }
  };
  


  
  module.exports = {
 getCart,
 addItemToCart,
 clearCart,
 removeItemFromCart
  };