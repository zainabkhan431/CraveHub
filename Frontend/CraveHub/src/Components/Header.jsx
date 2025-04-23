import "./Header.css";
import arrow from "../assets/right-arrow.png";
import { Link } from "react-router-dom";
export default function Header() {
 
  
  return (
    <div className="header"> 
    <div className="header-text">  
        <h1>CraveHub: You Order, We Serve</h1>
      <p>
      Discover the best dining experiences around you!
      </p>
      </div>
      <Link to={"/RestaurantCategories"}>
     <button className="btn"> Explore Now <img src={arrow}/> </button> </Link>
    
    </div>
  )
}
