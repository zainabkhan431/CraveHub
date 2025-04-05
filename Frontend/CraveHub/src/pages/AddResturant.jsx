import  { useState } from "react";
import { Box, Button, Paper, Typography, Modal, TextField, Grid } from "@mui/material";
import AdminSidebar from "../Components/AdminSidebar";
import AdminHeader from "../Components/AdminHeader";

export default function AddRestaurant() {
  const [restaurants, setRestaurants] = useState([]); // Store added restaurants
  const [restaurantData, setRestaurantData] = useState({
    name: "",
    image: "",
    description: "",
    rating: "",
    location: "",
    phoneNo: "",
    menuDishes: [],
  });

  const [dish, setDish] = useState({ name: "", price: "", description: "" });
  const [open, setOpen] = useState(false);

  const handleChange = (e) => {
    setRestaurantData({ ...restaurantData, [e.target.name]: e.target.value });
  };

  const handleDishChange = (e) => {
    setDish({ ...dish, [e.target.name]: e.target.value });
  };

  const addDish = () => {
    
    if (dish.name && dish.price && dish.description) {
      setRestaurantData({
        ...restaurantData,
        menuDishes: [...restaurantData.menuDishes, dish],
      });
      setDish({ name: "", price: "", description: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/restaurants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restaurantData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Restaurant added successfully!");
        
        // Update state to display new restaurant on the screen
        setRestaurants([...restaurants, { id: restaurants.length + 1, ...restaurantData }]);

        // Reset form
        setRestaurantData({
          name: "",
          image: "",
          description: "",
          rating: "",
          location: "",
          phoneNo: "",
          menuDishes: [],
        });

        setOpen(false);
      } else {
        alert(data.message || "Failed to add restaurant");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error! Could not add restaurant.");
    }
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}> 
    <AdminSidebar/>
    <Box sx={{ padding: "20px" }}>
            <AdminHeader heading="Restaurants"/>

      <Typography variant="h4" gutterBottom>
        Manage Restaurants
      </Typography>

      {/* Add Restaurant Button */}
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add Restaurant
      </Button>

      {/* Display Added Restaurants */}
      <Grid container spacing={2} sx={{ marginTop: "20px" }}>
        {restaurants.map((restaurant) => (
          <Grid item xs={12} sm={6} md={4} key={restaurant.id}>
            <Paper sx={{ padding: "15px", textAlign: "center" }}>
              <img src={restaurant.image} alt={restaurant.name} style={{ width: "100%", height: "150px", objectFit: "cover", borderRadius: "5px" }} />
              <Typography variant="h6" sx={{ marginTop: "10px" }}>{restaurant.name}</Typography>
              <Typography variant="body2" sx={{ color: "gray" }}>{restaurant.location}</Typography>
              <Typography variant="body1" sx={{ marginTop: "5px" }}>⭐ {restaurant.rating}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* Modal for Adding Restaurant */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 500,
            bgcolor: "white",
            p: 3,
            borderRadius: "10px",
            boxShadow: 24,
          }}
        >
          <Typography variant="h6">Enter Restaurant Details</Typography>

          <Grid container spacing={2} sx={{ marginTop: "10px" }}>
            <Grid item xs={12}>
              <TextField fullWidth label="Restaurant Name" name="name" value={restaurantData.name} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Image URL" name="image" value={restaurantData.image} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Description" name="description" multiline rows={2} value={restaurantData.description} onChange={handleChange} required />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Rating (1-5)" type="number" name="rating" value={restaurantData.rating} onChange={handleChange} required />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Phone Number" name="phoneNo" value={restaurantData.phoneNo} onChange={handleChange} required />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Location" name="location" value={restaurantData.location} onChange={handleChange} required />
            </Grid>
          </Grid>

          {/* Menu Dishes Section */}
          <Typography variant="h6" sx={{ marginTop: "15px" }}>
            Add Dishes
          </Typography>

          <Grid container spacing={2} sx={{ marginTop: "10px" }}>
            <Grid item xs={6}>
              <TextField fullWidth label="Dish Name" name="name" value={dish.name} onChange={handleDishChange} />
            </Grid>
            <Grid item xs={6}>
              <TextField fullWidth label="Price" type="number" name="price" value={dish.price} onChange={handleDishChange} />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth label="Dish Description" multiline rows={2} name="description" value={dish.description} onChange={handleDishChange} />
            </Grid>
          </Grid>

          <Button sx={{ marginTop: "15px" }} variant="outlined" color="secondary" onClick={addDish}>
            Add Dish
          </Button>

          <ul>
            {restaurantData.menuDishes.map((dish, index) => (
              <li key={index}>{dish.name} - ${dish.price}</li>
            ))}
          </ul>

          <Button sx={{ marginTop: "15px" }} variant="contained" color="primary" onClick={handleSubmit}>
            Save Restaurant
          </Button>
        </Box>
      </Modal>
    </Box>
    </div>
  );
}
