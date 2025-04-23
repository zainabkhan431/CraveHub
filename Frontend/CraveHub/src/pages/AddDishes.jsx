import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import {
  Box,
  Button,
  Typography,
  Modal,
  TextField,
  Grid,
  Paper,
  Chip,
} from "@mui/material";
import { Plus } from "lucide-react";

export default function AddDishes() {
    const location = useLocation();
const { restaurantId, name, category } = location.state || {};
  const [dishes, setDishes] = useState([]);
  const [open, setOpen] = useState(false);
  const [dishData, setDishData] = useState({
    name: "",
    description: "",
    category: "",
    offer: "",
    price: "",
    image: "",
    ingredients: [],
    flavors: [],
    sauces: [],
  });
  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const fetchDishes = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/dishes");
      const data = await res.json();
      if (res.ok) setDishes(data);
    } catch (error) {
      console.error("Failed to fetch dishes:", error);
    }
  };

  useEffect(() => {
    fetchDishes();
  }, []);

  const handleChange = (e) => {
    setDishData({ ...dishData, [e.target.name]: e.target.value });
  };

  const handleArrayChange = (e, key) => {
    setDishData({ ...dishData, [key]: e.target.value.split(",") });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const dishWithRestaurant = { ...dishData, restaurantId };
    const method = isEditMode ? "PUT" : "POST";
    const url = isEditMode
      ? `http://localhost:5000/api/dishes/${editingId}`
      : "http://localhost:5000/api/dishes";

    try {
      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dishWithRestaurant),
      });

      const result = await res.json();
      if (res.ok) {
        fetchDishes();
        setOpen(false);
        setDishData({
          name: "",
          description: "",
          category: "",
          offer: "",
          price: "",
          image: "",
          ingredients: [],
          flavors: [],
          sauces: [],
        });
        setIsEditMode(false);
        alert(`Dish ${isEditMode ? "updated" : "added"} successfully!`);
      } else {
        alert(result.message || "Error occurred");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  const handleEdit = (dish) => {
    setDishData(dish);
    setEditingId(dish._id);
    setIsEditMode(true);
    setOpen(true);
  };

  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this dish?");
    if (!confirm) return;

    try {
      const res = await fetch(`http://localhost:5000/api/dishes/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setDishes((prev) => prev.filter((d) => d._id !== id));
        alert("Dish deleted!");
      }
    } catch (err) {
      console.error(err);
      alert("Error deleting dish");
    }
  };

  return (
    <Box p={4} bgcolor="#0a0404" minHeight="100vh" color="white">
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={4}>
        <Typography variant="h4">Menu Dishes</Typography>
        <Button variant="contained" startIcon={<Plus />} onClick={() => setOpen(true)}>
          Add Dish
        </Button>
      </Box>
      <Box mb={2}>
  <Typography variant="h5">Restaurant: {name}</Typography>
  <Typography variant="subtitle1">Category: {category}</Typography>
</Box>
      <Grid container spacing={3}>
        {dishes.map((dish) => (
          <Grid item xs={12} sm={6} md={4} key={dish._id}>
            <Paper elevation={3} sx={{ padding: 2, backgroundColor: "#fff" }}>
              <img src={dish.image} alt={dish.name} width="100%" height="180px" style={{ objectFit: "cover", borderRadius: 8 }} />
              <Typography variant="h6" mt={1}>{dish.name}</Typography>
              <Typography>Category: {dish.category}</Typography>
              <Typography>Description: {dish.description}</Typography>
              <Typography>Price: ${dish.price}</Typography>
              {dish.offer && <Typography color="green">Offer: {dish.offer}</Typography>}
              <Box mt={1}>
                <Typography variant="subtitle2">Ingredients:</Typography>
                {dish.ingredients.map((ing, idx) => (
                  <Chip key={idx} label={ing} size="small" sx={{ margin: "2px", backgroundColor: "#4b5563", color: "white" }} />
                ))}
              </Box>
              <Box mt={1}>
                <Typography variant="subtitle2">Flavors:</Typography>
                {dish.flavors.map((f, idx) => (
                  <Chip key={idx} label={f} size="small" sx={{ margin: "2px", backgroundColor: "#6b7280", color: "white" }} />
                ))}
              </Box>
              <Box mt={1}>
                <Typography variant="subtitle2">Sauces:</Typography>
                {dish.sauces.map((s, idx) => (
                  <Chip key={idx} label={s} size="small" sx={{ margin: "2px", backgroundColor: "#9ca3af", color: "black" }} />
                ))}
              </Box>
              <Box mt={2} display="flex" justifyContent="space-between">
                <Button size="small" variant="outlined" onClick={() => handleEdit(dish)}>Edit</Button>
                <Button size="small" variant="outlined" color="error" onClick={() => handleDelete(dish._id)}>Delete</Button>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Modal open={open} onClose={() => setOpen(false)}>
  <Box
    component="form"
    onSubmit={handleSubmit}
    sx={{
      bgcolor: "white",
      color: "black",
      maxWidth: 600,
      margin: "100px auto",
      borderRadius: 3,
      p: 4,
      boxShadow: 24,
      display: "flex",
      flexDirection: "column",
      gap: 2,
    }}
  >
    <Typography variant="h5" mb={2}>
      {isEditMode ? "Edit Dish" : "Add New Dish"}
    </Typography>

    <TextField
      label="Dish Name"
      name="name"
      value={dishData.name}
      onChange={handleChange}
      fullWidth
      required
    />

    <TextField
      label="Description"
      name="description"
      value={dishData.description}
      onChange={handleChange}
      fullWidth
      required
    />

    <TextField
      label="Category"
      name="category"
      value={dishData.category}
      onChange={handleChange}
      fullWidth
      required
    />

    <TextField
      label="Offer (optional)"
      name="offer"
      value={dishData.offer}
      onChange={handleChange}
      fullWidth
    />

    <TextField
      label="Price"
      name="price"
      type="number"
      value={dishData.price}
      onChange={handleChange}
      fullWidth
      required
    />

    <TextField
      label="Image URL"
      name="image"
      value={dishData.image}
      onChange={handleChange}
      fullWidth
    />

    <TextField
      label="Ingredients (comma separated)"
      value={dishData.ingredients.join(",")}
      onChange={(e) => handleArrayChange(e, "ingredients")}
      fullWidth
      required
    />

    <TextField
      label="Flavors (comma separated)"
      value={dishData.flavors.join(",")}
      onChange={(e) => handleArrayChange(e, "flavors")}
      fullWidth
      required
    />

    <TextField
      label="Sauces (comma separated)"
      value={dishData.sauces.join(",")}
      onChange={(e) => handleArrayChange(e, "sauces")}
      fullWidth
      required
    />

    <Box display="flex" justifyContent="space-between" mt={2}>
      <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button variant="contained" type="submit">
        {isEditMode ? "Update" : "Add Dish"}
      </Button>
    </Box>
  </Box>
</Modal>

    </Box>
  );
}
