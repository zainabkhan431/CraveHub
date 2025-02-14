import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa"; // Import cart icon
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false); // Cart visibility state

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-logo">
          <Link to="header">CraveHub</Link>
        </div>
        <ul className="navbar-links">
          <li>
            <LinkRoute to="/">Home</LinkRoute>
          </li>
          <li>
            <LinkRoute to="/RestaurantCategories">Categories</LinkRoute>
          </li>
          <li>
            <LinkRoute to="/RestaurantBlogs">Blogs</LinkRoute>
          </li>
          <li>
            <LinkRoute to="/RestaurantAbout">About Us</LinkRoute>
          </li>
        </ul>
        <div className="navbar-actions">
          <LinkRoute to="/login" className="login-btn">
            Login
          </LinkRoute>
          <LinkRoute to="/register" className="cart-btn">
            Register
          </LinkRoute>
          {/* Cart Icon */}
          <FaShoppingCart className="cart-icon" onClick={() => setCartOpen(!cartOpen)} />
        </div>
      </nav>

      {/* Side Cart Menu */}
      <div className={`cart-menu ${cartOpen ? "open" : ""}`}>
       
        <h3>Your Cart</h3>
        <p>No items in the cart.</p>
      </div>

      {/* Overlay (only shown when cart is open) */}
      {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)}></div>}
    </>
  );
}

export default Navbar;
