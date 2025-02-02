import './Categories.css';
 
import fastfood from "../assets/food1.jpg";
import chinese from "../assets/chinese.jpg";
import continental from "../assets/continental.jpg";
import italian from "../assets/italian.jpg";
import indian from "../assets/indian.jpg";
import japanese from "../assets/japanese.jpg";
import { Link } from "react-router-dom";

const categories = [
  { id: 1,name: 'Chinese', image: chinese },
  { id: 2,name: 'Continental', image: continental },
  { id: 3,name: 'Fast Food',image: fastfood },
  { id: 4,name: 'Italian', image: italian },
  { id: 5,name: 'Indian', image: indian },
  { id: 6,name: 'Japanese', image: japanese },
]

export default function Categories() {
  return (
    <>
   
   
      <div className="categories-container">
      <div className='title'>
 <h2>Choose a Category</h2>
   </div>
  <div className='container'>
    
        {categories.map((category) => (
          <div key={category.name} className="category-card">
            <Link to="/restaurant-details">
             <img src={category.image} alt={category.name} className="category-icon" />
           
            <h3 className="category-name">{category.name}</h3>
            </Link>
          </div>
        ))}
        </div>
        <div className="category-btn-container">
    {/* <Link to="/RestaurantCategories"> <button className="category-btn">Explore Categories</button> </Link> */}
    
  </div>
      </div>
      </>
    
  );
}
