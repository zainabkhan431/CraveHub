import "./Footer.css";
export default function Footer() {
  return (
    <footer className="footer">
    <div className="footer-container">
      <div className="footer-branding">
        <h2>CraveHub</h2>
        
        <p>Delious Food at your Doorstep!</p>
      </div>
  
      <div className="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#about-section">Home</a></li>
          <li><a href="#services">Categories</a></li>
          <li><a href="#reservation">Reservation</a></li>
          <li><a href="#contact">About</a></li>
        </ul>
      </div>
  
      <div className="footer-menu">
        <h3>Menu</h3>
        <ul>
          <li><a href="#steaks">Steaks</a></li>
          <li><a href="#burgers">Burgers</a></li>
          <li><a href="#cocktails">Cocktails</a></li>
          <li><a href="#desserts">Desserts</a></li>
        </ul>
      </div>
  
      <div className="footer-newsletter">
        <h3>Newsletter</h3>
        <p>Get recent news and updates.</p>
        <form>
          <input type="email" placeholder="Email Address" />
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  
    <div className="footer-bottom">
      <p>&copy; 2025 CraveHub | All rights reserved</p>
      <div className="social-links">
        <a href="https://facebook.com" target="_blank">Facebook</a>
        <a href="https://instagram.com" target="_blank">Instagram</a>
      </div>
    </div>
  </footer>
  

  
  )
}

