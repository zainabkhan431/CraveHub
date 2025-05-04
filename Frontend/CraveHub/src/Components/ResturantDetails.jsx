import { useEffect, useState } from "react";
import {  Link, useSearchParams } from "react-router-dom";
import { FaMapMarkerAlt, FaPhoneAlt, FaStar, FaMoneyBillWave, FaInfoCircle, FaFilter } from "react-icons/fa";
// import Rating from "./Rating";

import "./ResturantDetails.css";

export default function RestaurantDetails() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [restaurants, setRestaurants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [loading, setLoading] = useState(false);

  
  const [error, setError] = useState("");
  useEffect(() => {
    if (category) {
      const fetchRestaurants = async () => {
        setLoading(true);
        try {
          const response = await fetch(`http://localhost:5000/api/restaurants/category/${category}`);

          const data = await response.json();
          console.log(data)
          setRestaurants(data);
        } catch (err) {
          console.error(err);
          setError("Failed to fetch restaurants");
        } finally {
          setLoading(false);
        }
      };
  
      fetchRestaurants();
    }
  }, [category]);
  
  // Filter restaurants
  const filteredRestaurants = restaurants.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceFilter ? restaurant.priceRange <= parseInt(priceFilter) : true;
    const matchesStatus = statusFilter ? restaurant.status === statusFilter : true;

    return matchesSearch && matchesPrice && matchesStatus;
  });

  return (
    <div className="restaurant-page">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search restaurants..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="content-wrapper">
        {/* Sidebar for Filters */}
        <div className="filter-sidebar">
          <h3><FaFilter /> Filters</h3>

          <div className="filter-section">
            <label>Price Range:</label>
            <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
              <option value="">All Prices</option>
              <option value="600">Below Rs 600</option>
              <option value="800">Below Rs 800</option>
              <option value="1000">Below Rs 1000</option>
            </select>
          </div>

          <div className="filter-section">
            <label>Status:</label>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="">All</option>
              <option value="Open">Open Now</option>
              <option value="Close">Closed</option>
            </select>
          </div>
        </div>

        {/* Main Content */}
        <div className="restaurant-list">
          {loading && <p>Loading restaurants...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}

          {!loading && !error && (
            filteredRestaurants.length > 0 ? (
              filteredRestaurants.map((restaurant) => (
                <Link to="/ResturantDishes" key={restaurant._id || restaurant.name}>
                  <div className="restaurant-card">
                    <img src={restaurant.imageUrl} alt={restaurant.name} />
                    <div className="restaurant-info">
                      <h2>{restaurant.name}</h2>
                      <p><FaMapMarkerAlt /> {restaurant.address}</p>
                      <p><FaPhoneAlt /> {restaurant.phoneNo}</p>
                      <p><FaMoneyBillWave /> Avg Price: Rs {restaurant.priceRange}</p>
                      <p><FaInfoCircle /> {restaurant.description}</p>
                      <p><FaStar /> Rating: {restaurant.rating}</p>
                      <p>Status: {restaurant.status}</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p style={{color:"white"}}>No restaurants found.</p>
            )
          )}
        </div>
      </div>
    </div>
  );
}
