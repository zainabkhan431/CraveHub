import  { useState } from "react";

export default function AddRestaurant() {
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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(restaurantData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Restaurant added successfully!");
        setRestaurantData({
          name: "",
          image: "",
          description: "",
          rating: "",
          location: "",
          phoneNo: "",
          menuDishes: [],
        });
      } else {
        alert(data.message || "Failed to add restaurant");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Server error! Could not add restaurant.");
    }
  };

  return (
    <div className="add-restaurant-container">
      <h2>Add Restaurant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Restaurant Name" value={restaurantData.name} onChange={handleChange} required />
        <input type="text" name="image" placeholder="Image URL" value={restaurantData.image} onChange={handleChange} required />
        <textarea name="description" placeholder="Description" value={restaurantData.description} onChange={handleChange} required />
        <input type="number" name="rating" placeholder="Rating (1-5)" value={restaurantData.rating} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={restaurantData.location} onChange={handleChange} required />
        <input type="text" name="phoneNo" placeholder="Phone Number" value={restaurantData.phoneNo} onChange={handleChange} required />

        {/* Menu Dishes Section */}
        <h3>Menu Dishes</h3>
        <input type="text" name="name" placeholder="Dish Name" value={dish.name} onChange={handleDishChange} />
        <input type="number" name="price" placeholder="Price" value={dish.price} onChange={handleDishChange} />
        <textarea name="description" placeholder="Dish Description" value={dish.description} onChange={handleDishChange} />
        <button type="button" onClick={addDish}>Add Dish</button>

        <ul>
          {restaurantData.menuDishes.map((dish, index) => (
            <li key={index}>{dish.name} - ${dish.price}</li>
          ))}
        </ul>

        <button type="submit">Add Restaurant</button>
      </form>
    </div>
  );
}
