import { useState } from "react";
import "./CategoriesDetail.css";
import Footer from "../Components/Footer.jsx";
import Container1 from "../assets/Container1.svg";
import Container2 from "../assets/Container2.svg";
import fastfood from "../assets/food1.jpg";
import chinese from "../assets/chinese.jpg";
import continental from "../assets/continental.jpg";
import indian from "../assets/indian.jpg";
import japanese from "../assets/japanese.jpg";
import category1 from "../assets/category1.svg";
import category2 from "../assets/category2.svg";
import category3 from "../assets/category3.svg";
import { Link } from "react-router-dom";

export default function CategoriesDetail() {
  const [searchTerm, setSearchTerm] = useState("");

  // Updated categories list
  const categories = [
    { id: 1, name: "Chinese", image: chinese },
    { id: 2, name: "Continental", image: continental },
    { id: 3, name: "Fast Food", image: fastfood },
    { id: 5, name: "Indian", image: indian },
    { id: 6, name: "Japanese", image: japanese },
  ];

  const allCategories = [
    { name: "Desi", image: category1 },
    { name: "Fast Food", image: category2 },
    { name: "Beverages", image: category3 },
    
    // Add more if Categories component has dynamic categories
  ];
  // Filter categories based on search input
  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Check if no results found
  const noResults = searchTerm && filteredCategories.length === 0;

  return (
    <div className="categories-detail">
      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search categories..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* If No Results Found */}
      {noResults ? (
        <div className="no-results">
          <h2>No results found.</h2>
        </div>
      ) : (
        <>
          {/* Categories Section */}
          <div className="categories-container">
            <div className="title">
              <h2>Choose a Category</h2>
            </div>
            <div className="container">
              {filteredCategories.map((category) => (
                <div key={category.id} className="category-card">
                  <Link to="/restaurant-details">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="category-icon"
                    />
                    <h3 className="category-name">{category.name}</h3>
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div className="feature-categories">
            <h2>Featured Categories</h2>
            <div className="card-section">
              {allCategories.map((category, index) => (
                <div key={index} className="categories-card">
                  <img src={category.image} alt={category.name} />
                  <h4>{category.name}</h4>
                </div>
              ))}
            </div>
          </div>
          {/* Package Section */}
          <div className="packages">
            <h2>A Collection of Unique Experiences</h2>
            <div className="experiances">
              <img src={Container1} alt="Experience 1" />
              <img src={Container2} alt="Experience 2" />
            </div>
          </div>

          <Footer />
        </>
      )}
    </div>
  );
}
