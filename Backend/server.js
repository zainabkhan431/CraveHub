const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const restaurantRoutes = require('./routes/restaurantRoutes');
const cartRoutes = require('./routes/cartRoutes');


// Load environment variables
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware to parse incoming JSON data
app.use(express.json());

// API routes
app.use('/api/users', userRoutes);
app.use('/api/restaurants', restaurantRoutes);
app.use('/api', cartRoutes);

// Default route
// app.get('/', (req, res) => {
//   res.send('API is running...');
// });

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
