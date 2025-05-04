/* eslint-disable react/prop-types */
import { useState } from 'react';
import yums1 from "../assets/yums3.png";
import "./Dishes.css";

// Sample dish data
const dishData = [
  { id: 1, name: "Apricot Chicken", type: "Pizza", price: 12, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Beef Burger", type: "Burgers", price: 8, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Caesar Salad", type: "Salads", price: 6, image: "https://via.placeholder.com/150" },
  { id: 4, name: "Chicken Tacos", type: "Tacos", price: 10, image: "https://via.placeholder.com/150" },
  { id: 5, name: "Veggie Wrap", type: "Wraps", price: 7, image: "https://via.placeholder.com/150" },
  { id: 6, name: "Fries", type: "Fries", price: 4, image: "https://via.placeholder.com/150" },
  { id: 7, name: "Lemonade", type: "Drinks", price: 3, image: "https://via.placeholder.com/150" },
];

export default function Dishes({ addToCart }) {
  const [selectedType, setSelectedType] = useState('All');
  const [maxPrice, setMaxPrice] = useState(20);
  const [budget, setBudget] = useState('');
  const [comboResults, setComboResults] = useState([]);

  const [reservation, setReservation] = useState({
    guests: '',
    date: '',
    time: '',
    name: '',
    phone: '',
  });
  const handleReservationChange = (e) => {
    const { name, value, type, checked } = e.target;
    setReservation((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleReservationSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Details:", reservation);
    alert("Table Reserved Successfully!");
    setReservation({
      guests: '',
      date: '',
      time: '',
      name: '',
      phone: '',
    
    });
  };
  const handleInputChange = (e) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      setBudget(value);
    }
  };
  const findCombos = () => {
    const budgetValue = parseInt(budget);
    if (!budgetValue || budgetValue <= 0) {
      setComboResults([]);
      return;
    }
  // Handle reservation submit
 
    const results = [];
    const findExactCombos = (combo, index, total) => {
      if (total === budgetValue) {
        results.push([...combo]);
        return;
      }
      if (total > budgetValue || index >= dishData.length) return;

      findExactCombos([...combo, dishData[index]], index + 1, total + dishData[index].price);
      findExactCombos(combo, index + 1, total);
    };

    findExactCombos([], 0, 0);
    setComboResults(results);
  };
  // Filter dishes based on selected type and max price
  const filteredDishes = dishData.filter(dish =>
    (selectedType === 'All' || dish.type === selectedType) && dish.price <= maxPrice
  );

  // Handle "Add to Cart" button click
  const handleAddToCart = (dish) => {
    addToCart(dish); // Add selected dish to the cart
  };

  return (
    <div className="dishes-section">
      <img src={yums1} className="header-image" alt="header" />
      <div className="dishes-content">
        {/* Sidebar for Filters */}
        <div className="sidebar-dishes">
          {/* Filter by Food Type */}
          <h3>Food Types</h3>
          <ul>
            <li className={selectedType === 'All' ? 'active' : ''} onClick={() => setSelectedType('All')}>All</li>
            <li className={selectedType === 'Pizza' ? 'active' : ''} onClick={() => setSelectedType('Pizza')}>Pizza</li>
            <li className={selectedType === 'Burgers' ? 'active' : ''} onClick={() => setSelectedType('Burgers')}>Burgers</li>
            <li className={selectedType === 'Salads' ? 'active' : ''} onClick={() => setSelectedType('Salads')}>Salads</li>
            <li className={selectedType === 'Tacos' ? 'active' : ''} onClick={() => setSelectedType('Tacos')}>Tacos</li>
            <li className={selectedType === 'Wraps' ? 'active' : ''} onClick={() => setSelectedType('Wraps')}>Wraps</li>
            <li className={selectedType === 'Fries' ? 'active' : ''} onClick={() => setSelectedType('Fries')}>Fries</li>
            <li className={selectedType === 'Drinks' ? 'active' : ''} onClick={() => setSelectedType('Drinks')}>Drinks</li>
          </ul>

          {/* Filter by Price */}
          <h3>Filter by Price</h3>
          <input type="range" min="1" max="20" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
          <p>Max Price: ${maxPrice}</p>
        </div>

             {/* Dish Display Section */}
             <div className="dish-display">
             {/* Reservation Form */}
        <div className="reservation-form">
          <h2>Reserve A Table</h2>
          <form onSubmit={handleReservationSubmit}>
            <div className="form-row">
              <input type="number" name="guests" placeholder="No of Guests" value={reservation.guests} onChange={handleReservationChange} required />
              <input type="date" name="date" value={reservation.date} onChange={handleReservationChange} required />
              <input type="time" name="time" value={reservation.time} onChange={handleReservationChange} required />
            </div>
            <div className="form-row">
              <input type="text" name="name" placeholder="Full Name" value={reservation.name} onChange={handleReservationChange} required />
              <input type="tel" name="phone" placeholder="Phone No" value={reservation.phone} onChange={handleReservationChange} required />
            </div>
           
            <button type="submit">Submit</button>
          </form>
        </div>
          <div className="budget-input-container">
            <label htmlFor="budget">Enter Your Budget (USD)</label>
            <input id="budget" type="text" onChange={handleInputChange} value={budget} placeholder="e.g., 20" maxLength="6" />
            <button onClick={findCombos}>Find Combos</button>
          </div>

          {comboResults.length > 0 && (
            <div className="combos-section">
              <h3>Combos for ${budget}</h3>
              <div className="combos">
                {comboResults.map((combo, index) => (
                  <div key={index} className="combo-card">
                    <h4>Combo {index + 1}</h4>
                    {combo.map((dish) => (
                      <div key={dish.id} className="dish-card">
                        <img src={dish.image} alt={dish.name} />
                        <p>{dish.name} - ${dish.price}</p>
                      </div>
                    ))}
                    <p>Total: ${combo.reduce((sum, dish) => sum + dish.price, 0)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="dishes-display-div">
            {filteredDishes.map((dish) => (
              <div key={dish.id} className="dish-card">
                <img src={dish.image} alt={dish.name} />
                <h4>{dish.name}</h4>
                <p>Type: {dish.type}</p>
                <p>Price: ${dish.price}</p>
                <button onClick={() => handleAddToCart(dish)}>Add to Cart</button>              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
