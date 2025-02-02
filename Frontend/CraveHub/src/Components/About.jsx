import "./About.css";
import logo from "../assets/logo.png";

function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">
        <h2>About Us</h2>
        <div className="about-image">
          <img src={logo} alt="About Us" />
        </div>
        <div className="about-content">
          
          <p>
            At <strong>CraveHub</strong>, we are dedicated to providing a seamless dining experience by connecting food enthusiasts with their favorite restaurants. Our platform simplifies the process of exploring menus, making reservations, and placing orders.
          </p>
          <p>
            Our goal is to promote local eateries and help food lovers discover culinary delights while ensuring convenience and transparency. Whether you are planning a casual lunch, a family dinner, or a celebration, <strong>CraveHub</strong> has got you covered.
          </p>
         
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
