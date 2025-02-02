const mongoose = require('mongoose');

const cartItemSchema = mongoose.Schema({
  dish: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Dish', // Reference the dish from your menu
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
});

const cartSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference the user schema
    required: true,
  },
  items: {
    type: [cartItemSchema],
    required: true,
    default: [],
  },
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
