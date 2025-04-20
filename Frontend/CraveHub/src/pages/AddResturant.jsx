import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  Grid,
  Paper,
} from "@mui/material";
import AdminSidebar from "../Components/AdminSidebar";
import AdminHeader from "../Components/AdminHeader";
import { motion } from "framer-motion";
import StatCard from "../Components/StatCard";
import { Store, Star, MapPin, Phone } from "lucide-react";

export default function AddRestaurant() {
  const [restaurants, setRestaurants] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [restaurantData, setRestaurantData] = useState({
    name: "",
    image: "",
    description: "",
    rating: "",
    location: "",
    phoneNo: "",
    category: "",
    menuDishes: [],
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const totalRestaurants = restaurants.length;
  const topRated = restaurants.filter((r) => parseFloat(r.rating) >= 4.5).length;
  const uniqueCities = new Set(restaurants.map((r) => r.location)).size;
  const contactCount = restaurants.filter((r) => r.phoneNo).length;

  useEffect(() => {
    const fetchRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/restaurants");
        const data = await response.json();
        if (response.ok) {
          setRestaurants(data);
        } else {
          console.error("Failed to fetch restaurants");
        }
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };
    fetchRestaurants();
  }, []);

  const handleChange = (e) => {
    setRestaurantData({ ...restaurantData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isEditMode) {
      const response = await fetch(
        `http://localhost:5000/api/restaurants/${editingId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(restaurantData),
        }
      );
      const updatedRestaurant = await response.json();
      if (response.ok) {
        setRestaurants((prev) =>
          prev.map((r) => (r._id === editingId ? updatedRestaurant : r))
        );
        alert("Restaurant updated successfully!");
      }
    } else {
      const response = await fetch("http://localhost:5000/api/restaurants", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(restaurantData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Restaurant added successfully!");
        setRestaurants((prev) => [...prev, data]);
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
    }
  };

  const handleEdit = (restaurant) => {
    setIsEditMode(true);
    setEditingId(restaurant._id);
    setRestaurantData(restaurant);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this restaurant?");
    if (!confirm) return;

    try {
      const response = await fetch(
        `http://localhost:5000/api/restaurants/${id}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        setRestaurants((prev) => prev.filter((r) => r._id !== id));
        alert("Restaurant deleted!");
      } else {
        alert("Failed to delete restaurant");
      }
    } catch (error) {
      console.error(error);
      alert("Server error!");
    }
  };

  const filteredRestaurants = restaurants.filter((r) =>
    r.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        backgroundColor: "rgb(10 4 4)",
      }}
    >
      <AdminSidebar />
      <Box
        flex={1}
        overflow="auto"
        position="relative"
        zIndex={10}
        sx={{ paddingLeft: "16px", paddingRight: "16px" }}
      >
        <AdminHeader heading="Restaurants" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Grid container spacing={3} mb={4} mt={5}>
            <Grid item xs={12} sm={6} lg={3}>
              <StatCard
                name="Total Restaurants"
                icon={Store}
                value={totalRestaurants}
                color="#6366F1"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StatCard
                name="Top Rated"
                icon={Star}
                value={topRated}
                color="#8B5CF6"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StatCard
                name="Cities Covered"
                icon={MapPin}
                value={uniqueCities}
                color="#EC4899"
              />
            </Grid>
            <Grid item xs={12} sm={6} lg={3}>
              <StatCard
                name="Contact Count"
                icon={Phone}
                value={contactCount}
                color="#10B981"
              />
            </Grid>
          </Grid>
        </motion.div>

        <Typography variant="h4" color="#fff" gutterBottom>
          Manage Restaurants
        </Typography>

        <Box display="flex" alignItems="center" justifyContent="space-between" mt={2} mb={2}>
          <TextField
            label="Search Restaurant"
            variant="outlined"
            size="small"
            sx={{ backgroundColor: "#fff", borderRadius: 1 }}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
            Add Restaurant
          </Button>
        </Box>

        {/* Modal for Adding/Editing Restaurant */}
        <Modal open={open} onClose={() => setOpen(false)}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "background.paper",
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
              width: 400,
            }}
          >
            <Typography variant="h6" mb={2}>
              {isEditMode ? "Edit Restaurant" : "Add New Restaurant"}
            </Typography>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              name="name"
              value={restaurantData.name}
              onChange={handleChange}
              required
            />
            <TextField
              label="Image URL"
              fullWidth
              margin="normal"
              name="image"
              value={restaurantData.image}
              onChange={handleChange}
              required
            />
            <TextField
              label="Description"
              fullWidth
              margin="normal"
              name="description"
              value={restaurantData.description}
              onChange={handleChange}
              required
            />
            <TextField
              select
              SelectProps={{ native: true }}
              fullWidth
              margin="normal"
              name="category"
              value={restaurantData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Chinese">Chinese</option>
              <option value="Continental">Continental</option>
              <option value="Fast Food">Fast Food</option>
              <option value="Italian">Italian</option>
              <option value="BBQ">BBQ</option>
              <option value="Cafe">Cafe</option>
              <option value="Other">Other</option>
            </TextField>
            <TextField
              label="Rating"
              type="number"
              fullWidth
              margin="normal"
              name="rating"
              value={restaurantData.rating}
              onChange={handleChange}
              required
            />
            <TextField
              label="Location"
              fullWidth
              margin="normal"
              name="location"
              value={restaurantData.location}
              onChange={handleChange}
              required
            />
            <TextField
              label="Phone Number"
              fullWidth
              margin="normal"
              name="phoneNo"
              value={restaurantData.phoneNo}
              onChange={handleChange}
              required
            />
            <Box textAlign="right" mt={2}>
              <Button onClick={() => setOpen(false)} sx={{ mr: 1 }}>
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                {isEditMode ? "Update" : "Add"}
              </Button>
            </Box>
          </Box>
        </Modal>

        {/* Display Filtered Restaurants */}
        <Grid container spacing={2} sx={{ marginTop: "20px" }}>
          {filteredRestaurants.map((restaurant) => (
            <Grid item xs={12} sm={6} md={4} key={restaurant._id || restaurant.name}>
              <Paper
                sx={{
                  padding: "10px",
                  textAlign: "center",
                  backgroundColor: "#1e1e1e",
                  color: "white",
                  height: "auto",
                  width: "300px",
                }}
              >
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "5px",
                    marginBottom: "10px",
                  }}
                />
                <Typography variant="h6">{restaurant.name}</Typography>
                <Typography variant="body2">{restaurant.description}</Typography>
                <Typography variant="body2" mt={1}>
                  ⭐ {restaurant.rating} | 📍 {restaurant.location} | 🍽 {restaurant.category}
                </Typography>
                <Box mt={2}>
                  <Button onClick={() => handleEdit(restaurant)} variant="outlined" color="primary" sx={{ mr: 1 }}>
                    Edit
                  </Button>
                  <Button onClick={() => handleDelete(restaurant._id)} variant="outlined" color="error">
                    Delete
                  </Button>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
