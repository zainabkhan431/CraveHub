import { useState } from "react";
import Dishes from "../Components/Dishes";
import Navbar from "../Components/Navbar";

export default function ResturantDishes() {
  const [cart, setCart] = useState([]);

  // Function to add items to the cart
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  return (
    <div>
      {/* Pass addToCart function and cart state as props */}
      <Navbar cart={cart} setCart={setCart}/>
      <Dishes addToCart={addToCart} />
    </div>
  );
}

 