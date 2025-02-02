import "./Resturant.css";
import kfc from "../assets/kfc.png";
import Elclasico from "../assets/elclasico.png";
import dragonwok from "../assets/dragon wok.jpeg";
import lit from "../assets/lit.jpeg";
import angan from "../assets/angan.jpeg";

export default function Resturant() {
  const resturants = [
    {
      name: "KFC",
      image: kfc,
      address: "Multan",
      phoneNo: "+92 61 111 280...",
      priceRange: "Rs 500.00 - Rs 1000.00",
      category: "Fast Food",
      status: "Open",
      views: "1,020",
    },
    {
      name: "Elclasico",
      image: Elclasico,
      address: "Lahore",
      phoneNo: "+92 42 333 123...",
      priceRange: "Rs 400.00 - Rs 800.00",
      category: "Fine Dining",
      status: "Open",
      views: "980",
    },
    {
      name: "Dragon Wok",
      image: dragonwok,
      address: "Karachi",
      phoneNo: "+92 21 555 456...",
      priceRange: "Rs 600.00 - Rs 1200.00",
      category: "Chinese",
      status: "Closed",
      views: "890",
    },
    {
      name: "Lit",
      image: lit,
      address: "Islamabad",
      phoneNo: "+92 51 444 789...",
      priceRange: "Rs 700.00 - Rs 1300.00",
      category: "Casual Dining",
      status: "Open",
      views: "760",
    },
    {
      name: "Angan",
      image: angan,
      address: "Faisalabad",
      phoneNo: "+92 41 888 567...",
      priceRange: "Rs 300.00 - Rs 700.00",
      category: "Desi",
      status: "Open",
      views: "650",
    },
  ];

  return (
    <div className="resturants-container">
         <div className='title'>
 <h2>Featured Resturants</h2>
   </div>
   <div className="resturant">

  
      {resturants.map((resturant) => (
        <div key={resturant.name} className="resturants-card">
          <div className="resturants-card-header">
            <p className="views">
              <i className="fas fa-eye"></i> {resturant.views} views
            </p>
            <i className="fas fa-heart favorite-icon"></i>
          </div>
          <img src={resturant.image} alt={resturant.name} className="resturants-icon" />
          <h3 className="resturants-name">{resturant.name}</h3>
          <p className="resturants-address">{resturant.address}</p>
          <p className="resturants-details">
            <i className="fas fa-map-marker-alt"></i> {resturant.address}
          </p>
          <p className="resturants-details">
            <i className="fas fa-phone-alt"></i> {resturant.phoneNo}
          </p>
          <p className="resturants-details">
            <i className="fas fa-money-bill-wave"></i> {resturant.priceRange}
          </p>
          <div className="resturants-footer">
            <span className="category">
              <i className="fas fa-pizza-slice"></i> {resturant.category}
            </span>
            <span className={`status ${resturant.status === "Open" ? "open" : "closed"}`}>
              {resturant.status}
            </span>
          </div>
        </div>
      ))}
       </div>
    </div>
  );
}
