import Rating from "./Rating"
import { FaMapMarkerAlt, FaPhoneAlt, FaStar, FaMoneyBillWave, FaInfoCircle } from 'react-icons/fa'; // Importing icons
import { Link } from "react-router-dom";

import "./ResturantDetails.css"
import yums from "../assets/Yums.png";
import shangrilla from "../assets/shangrilla.png";
import dragonwok from "../assets/dragon wok.jpeg";
import fusion from "../assets/fusion.jpg";
import dfc from "../assets/DFC.jpg";




export default function ResturantDetails() {

    const resturantdetails = [
        {
          name: "Yum Chinese & Thai",
          image: yums,
        description:"Chinese restaurant",
          address: "19 A, Gulgasht Colony, Multan",
          reviews:"I had a good experience at Yum Chinese & Thai. Service is 5/5, Atmosphere is 5/5 ",
          phoneNo: "+92 61 111 280...",
          priceRange: "Rs 500.00 - Rs 1000.00",
          status: "Open",
          rating:3.5,
        },
        {
            name: "Shangrilla Chinese",
            image: shangrilla,
          description:"Has all you can eat · High chairs available",
            address: "117B Bohra St, Saddar Multan Cantt Commercial Area, Multan, Punjab",
            reviews:"I had a fantastic dining experience at Shangrilla Chinese that I can't recommend highly enough. ",
            phoneNo: "+92 61 111 280...",
            priceRange: "Rs 500.00 - Rs 1000.00",
            status: "Open",
            rating:4.7,
          },
          {
            name: "Dragon Wok",
            image: dragonwok,
          description:"Serves happy-hour food · High chairs available",
            address: "Shop1007, 1008, abu Muhammad street, behind Dubai Plaza, cantt, Multan, 60000",
            reviews:"The atmosphere and ambiance of the restaurant needs improvement. ",
            phoneNo: "+92 61 111 280...",
            priceRange: "Rs 500.00 - Rs 1000.00",
            status: "Close",
            rating:4,
            
          },
          {
            name: "Chinese Fusion",
            image: fusion,
          description:"Chinese restaurant",
            address: "52 Sheikh Abdul Hameed Rd, A Block Gulgasht Colony, Multan, Punjab 66000",
            reviews:"While Chinese fusion is on the pricier side, the quality of the food and the overall dining experience justify the cost ",
            phoneNo: "+92 61 111 280...",
            priceRange: "Rs 500.00 - Rs 1000.00",
            status: "Open",
            rating:4.6,
            
          } , {
            name: "Discovery Food Container",
            image: dfc,
          description:"Hong Kong style fast food restaurant",
            address: " 6GR7+VX6, Basti Hajji Pur Basti Hajipur, Multan, Punjab",
            reviews:"this small Chinese food eatery is a hidden gem that deserves recognition for its outstanding cuisine and warm hospitality. ",
            phoneNo: "+92 61 111 280...",
            priceRange: "Rs 500.00 - Rs 1000.00",
            status: "Close",
            rating:4.2,
          },]
  return (
    <div className="restaurant-list">
    {resturantdetails.map((restaurant) => (
      <>
      
       <Link to="/restaurant-dishes"> 
      <div className="restaurant-card" key={restaurant.name}>
       
        <div className="image-styles"> 
        <img src={restaurant.image} alt={restaurant.name} className="resturants-image" />
            </div>
            <div className="text-styles">
            <h2 className="restaurant-name">{restaurant.name}</h2>
            <p className="restaurant-description">
              <FaInfoCircle style={{ fill: '#800000' }}/> {restaurant.description}
            </p>
            <p className="restaurant-address">
              <FaMapMarkerAlt style={{ fill: 'green' }}/> {restaurant.address}
            </p>
            <p className="restaurant-reviews">
            <FaStar fill='yellow' /> {restaurant.reviews}
            </p>
            <p className="restaurant-phone">
              <FaPhoneAlt  style={{ fill: 'black' }}/> {restaurant.phoneNo}
            </p>
            <p className="restaurant-price">
              <FaMoneyBillWave style={{ fill: '#800000' }}/> {restaurant.priceRange}
            </p>
            <p className="restaurant-status">
              <strong>Status:</strong>{" "}
              <span className={restaurant.status === "Open" ? "open" : "close"}>
                {restaurant.status}
              </span>
            </p>
            <Rating rating={restaurant.rating}/>
          </div>
      </div>
      </Link>
      </>
    ))}
  </div>
      
   
  )
}
