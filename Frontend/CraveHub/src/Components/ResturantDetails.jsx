import { useState } from "react";
import Rating from "./Rating";
import { FaMapMarkerAlt, FaPhoneAlt, FaStar, FaMoneyBillWave, FaInfoCircle, FaFilter, FaSearch } from 'react-icons/fa';
import { Link } from "react-router-dom";

import "./ResturantDetails.css";

import yums from "../assets/Yums.png";
import shangrilla from "../assets/shangrilla.png";
import dragonwok from "../assets/dragon wok.jpeg";
import fusion from "../assets/fusion.jpg";
import dfc from "../assets/DFC.jpg";

export default function RestaurantDetails() {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState(""); // For price range filtering
  const [statusFilter, setStatusFilter] = useState(""); // For Open/Close status filtering

  const restaurantDetails = [
    {
      name: "Yum Chinese & Thai",
      image: yums,
      description: "Chinese restaurant",
      address: "19 A, Gulgasht Colony, Multan",
      reviews: "I had a good experience at Yum Chinese & Thai. Service is 5/5, Atmosphere is 5/5 ",
      phoneNo: "+92 61 111 280...",
      priceRange: 700,
      status: "Open",
      rating: 3.5,
    },
    {
      name: "Shangrilla Chinese",
      image: shangrilla,
      description: "All you can eat · High chairs available",
      address: "117B Bohra St, Saddar Multan Cantt Commercial Area, Multan",
      reviews: "I had a fantastic dining experience at Shangrilla Chinese that I can't recommend highly enough.",
      phoneNo: "+92 61 111 280...",
      priceRange: 800,
      status: "Open",
      rating: 4.7,
    },
    {
      name: "Dragon Wok",
      image: dragonwok,
      description: "Serves happy-hour food · High chairs available",
      address: "Shop1007, abu Muhammad street, behind Dubai Plaza, Multan",
      reviews: "The atmosphere of the restaurant needs improvement.",
      phoneNo: "+92 61 111 280...",
      priceRange: 600,
      status: "Close",
      rating: 4,
    },
    {
      name: "Chinese Fusion",
      image: fusion,
      description: "Chinese restaurant",
      address: "52 Sheikh Abdul Hameed Rd, A Block Gulgasht Colony, Multan",
      reviews: "While Chinese Fusion is on the pricier side, the quality justifies the cost.",
      phoneNo: "+92 61 111 280...",
      priceRange: 900,
      status: "Open",
      rating: 4.6,
    },
    {
      name: "Discovery Food Container",
      image: dfc,
      description: "Hong Kong style fast food restaurant",
      address: "Basti Hajji Pur, Multan",
      reviews: "This small Chinese eatery is a hidden gem with outstanding cuisine.",
      phoneNo: "+92 61 111 280...",
      priceRange: 500,
      status: "Close",
      rating: 4.2,
    },
  ];

  // Filter logic based on search term, price range, and status
  const filteredRestaurants = restaurantDetails.filter((restaurant) => {
    const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPrice = priceFilter ? restaurant.priceRange <= parseInt(priceFilter) : true;
    const matchesStatus = statusFilter ? restaurant.status === statusFilter : true;

    return matchesSearch && matchesPrice && matchesStatus;
  });

  return (
    <div className="restaurant-page">
      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
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

          {/* Price Filter */}
          <div className="filter-section">
            <label>Price Range:</label>
            <select value={priceFilter} onChange={(e) => setPriceFilter(e.target.value)}>
              <option value="">All Prices</option>
              <option value="600">Below Rs 600</option>
              <option value="800">Below Rs 800</option>
              <option value="1000">Below Rs 1000</option>
            </select>
          </div>

          {/* Status Filter */}
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
         

          {filteredRestaurants.length > 0 ? (
            filteredRestaurants.map((restaurant) => (
              <Link to="/ResturantDishes" key={restaurant.name}>
                <div className="restaurant-card">
                  <div className="image-styles">
                    <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
                  </div>
                  <div className="text-styles">
                    <h2 className="restaurant-name">{restaurant.name}</h2>
                    <p className="restaurant-description">
                      <FaInfoCircle style={{ fill: '#800000' }} /> {restaurant.description}
                    </p>
                    <p className="restaurant-address">
                      <FaMapMarkerAlt style={{ fill: 'green' }} /> {restaurant.address}
                    </p>
                    <p className="restaurant-reviews">
                      <FaStar fill='yellow' /> {restaurant.reviews}
                    </p>
                    <p className="restaurant-phone">
                      <FaPhoneAlt style={{ fill: 'black' }} /> {restaurant.phoneNo}
                    </p>
                    <p className="restaurant-price">
                      <FaMoneyBillWave style={{ fill: '#800000' }} /> Rs {restaurant.priceRange}
                    </p>
                    <p className="restaurant-status">
                      <strong>Status:</strong>{" "}
                      <span className={restaurant.status === "Open" ? "open" : "close"}>
                        {restaurant.status}
                      </span>
                    </p>
                    <Rating rating={restaurant.rating} />
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <div className="no-results">
              <h3>No restaurants found.</h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
