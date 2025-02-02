const mongoose = require('mongoose');
const Dish = require('./dishModel'); // Import the Dish model

const restaurantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL of the restaurant image
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  location: {
    type: String, // Could also be an object if you need more details
    required: true,
  },
  reviews: {
    type: String,
  },
  phoneNo: {
    type: String,
    required: true,
  },
  menu: [
    {
      type: mongoose.Schema.Types.ObjectId, // Reference to the Dish model
      ref: 'Dish',
    },
  ],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
