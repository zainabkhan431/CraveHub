import { useState } from "react";
import "./CategoriesDetail.css";
import Categories from "../Components/Categories.jsx";
import Footer from "../Components/Footer.jsx";

import Container1 from "../assets/Container1.svg";
import Container2 from "../assets/Container2.svg";
import category1 from "../assets/category1.svg";
import category2 from "../assets/category2.svg";
import category3 from "../assets/category3.svg";

export default function CategoriesDetail() {
    const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="categories-detail">
     <div className="search-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="feature-categories">
      <h2>Featured Categories</h2>
      <div className="card-section">
         <div className="categories-card">  
          <img src={category1}/>
          <h4>Desi</h4>
         </div>
         <div className="categories-card">  
          <img src={category2}/>
          <h4>Fast Food</h4>
         </div>
         <div className="categories-card">  
          <img src={category3}/>
          <h4>Beverages</h4>
         </div>
      </div>
     </div>
     <Categories/>
     <div className="packages">
        <h2>
            A Collection of Unique Experiances
        </h2>
        <div className="experiances">
            <img src={Container1}/>
            <img src={Container2}/>

        </div>

     </div>
     <Footer/>
    </div>
  )
}
