import { useEffect, useState } from "react";
import "./Resturant.css";

export default function Resturant() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    const fetchTopRatedRestaurants = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/restaurants");
        const data = await response.json();
        if (response.ok) {
          // Filter and sort by rating, then take top 5
          const topRated = data
            .filter((r) => parseFloat(r.rating) >= 4.0) // adjust threshold if needed
            .sort((a, b) => parseFloat(b.rating) - parseFloat(a.rating))
            .slice(0, 5);
          setRestaurants(topRated);
        } else {
          console.error("Failed to fetch restaurants");
        }
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    fetchTopRatedRestaurants();
  }, []);

  return (
    <div className="resturants-container">
      <div className="title">
        <h2>Top Rated Restaurants</h2>
      </div>
      <div className="resturant">
        {restaurants.map((restaurant) => (
          <div key={restaurant._id} className="resturants-card">
            <div className="resturants-card-header">
              <p className="views">
                <i className="fas fa-star"></i> {restaurant.rating} stars
              </p>
              <i className="fas fa-heart favorite-icon"></i>
            </div>
            <img
              src={restaurant.image}
              alt={restaurant.name}
              className="resturants-icon"
            />
            <h3 className="resturants-name">{restaurant.name}</h3>
            <p className="resturants-address">{restaurant.location}</p>
            <p className="resturants-details">
              <i className="fas fa-map-marker-alt"></i> {restaurant.location}
            </p>
            <p className="resturants-details">
              <i className="fas fa-phone-alt"></i> {restaurant.phoneNo}
            </p>
            <p className="resturants-details">
              <i className="fas fa-info-circle"></i> {restaurant.description}
            </p>
            <div className="resturants-footer">
              <span className="category">
                <i className="fas fa-pizza-slice"></i> {restaurant.category}
              </span>
            
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
