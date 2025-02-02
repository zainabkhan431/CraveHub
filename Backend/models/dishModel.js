const mongoose = require('mongoose');

const dishSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  offer: {
    type: String, // Assuming this field holds some type of offer, e.g., discount
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: String, // URL of the dish image
  },
  ingredients: {
    type: [String], // Array of ingredients
    required: true,
  },
  flavors: {
    type: [String], // Array of flavors, e.g., spicy, sweet, etc.
    required: true,
  },
  sauces: {
    type: [String], // Array of sauces, e.g., ketchup, mayo, etc.
    required: true,
  },
});

const Dish = mongoose.model('Dish', dishSchema);

module.exports = Dish;
