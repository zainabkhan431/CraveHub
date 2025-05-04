/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { useAuth } from "../AuthContext";

function Navbar({ cart, setCart }) {
  const { logout } = useAuth();

  const [scrolled, setScrolled] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [showBilling, setShowBilling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const total = cart?.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-logo">
          <Link to="header">CraveHub</Link>
        </div>
        <ul className="navbar-links">
          <li><LinkRoute to="/">Home</LinkRoute></li>
          <li><LinkRoute to="/RestaurantCategories">Categories</LinkRoute></li>
          <li><LinkRoute to="/RestaurantBlogs">Blogs</LinkRoute></li>
          <li><LinkRoute to="/RestaurantAbout">About Us</LinkRoute></li>
        </ul>
        <div className="navbar-actions">
          {!localStorage.getItem("userToken") ? (
            <LinkRoute to="/login" className="login-btn">Login</LinkRoute>
          ) : (
            <button className="login-btn" onClick={() => logout()}>Logout</button>
          )}
          <LinkRoute to="/register" className="cart-btn">Register</LinkRoute>
          <div className="cart-icon-wrapper" onClick={() => setCartOpen(!cartOpen)}>
            <FaShoppingCart className="cart-icon" />
            {cart?.length > 0 && <span className="cart-badge">{cart.length}</span>}
          </div>
        </div>
      </nav>

      {/* Side Cart Menu */}
      <div className={`cart-menu ${cartOpen ? "open" : ""}`}>
        <h3>Your Cart</h3>

        {!showBilling ? (
          cart?.length > 0 ? (
            <>
              <ul className="cart-list">
                {cart.map((item, index) => (
                  <li key={index} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-img" />
                    <div>
                      <p>{item.name}</p>
                      <p>${item.price.toFixed(2)}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="cart-total">Total: ${cart?.reduce((total, item) => total + item.price, 0)}</p>
              <button className="billing-btn" onClick={() => setShowBilling(true)}>Proceed to Billing</button>
            </>
          ) : (
            <p>No items in the cart.</p>
          )
        ) : (
          <div className="billing-form">
            <h4>Billing Details</h4>
            <form>
              <input type="text" placeholder="Full Name" required />
              <input type="email" placeholder="Email" required />
              <input type="text" placeholder="Address" required />
              <button type="submit">Submit</button>
              <button type="button" onClick={() => setShowBilling(false)}>Back to Cart</button>
            </form>
          </div>
        )}
      </div>

      {cartOpen && <div className="cart-overlay" onClick={() => setCartOpen(false)}></div>}
    </>
  );
}

export default Navbar;
