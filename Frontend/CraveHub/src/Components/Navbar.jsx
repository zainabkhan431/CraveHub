import  { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as LinkRoute } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

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
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-logo">
        <Link to="header">CraveHub</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <LinkRoute to={'/'} offset={0} duration={500}>
            Home
          </LinkRoute>
        </li>
        <li>
          <LinkRoute to="/RestaurantCategories">
            Categories
          </LinkRoute>
        </li>
       
        <li>
        <LinkRoute to="/RestaurantBlogs">
            Blogs
          </LinkRoute>
        </li>
        <li>
        <LinkRoute to="/RestaurantAbout">
            About Us
          </LinkRoute>
        </li>
      </ul>
      <div className="navbar-actions">
        <LinkRoute to={'/login'} className="login-btn">
          Login
        </LinkRoute>
        <LinkRoute to={'/register'} className="cart-btn">
          Register
        </LinkRoute>
      </div>
    </nav>
  );
}

export default Navbar;
