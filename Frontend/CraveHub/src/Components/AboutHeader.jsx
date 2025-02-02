import Aboutheader from "../assets/Aboutheader.svg";
import aboutimg1 from "../assets/aboutimg1.svg";
import aboutimg2 from "../assets/aboutimg2.svg";
import "./AboutHeader.css";

export default function AboutHeader() {
  return (
    <div className="About-header-container">
    
      <div className="About-header">
        <h2 className="curved-text">Who Are We?</h2>
        <img src={Aboutheader} alt="About Header" />
        <div className="subtitle">
    Our mission is to connect food lovers with the best dining experiences in town.<br/> Discover, explore, and indulge with CraveHub!
  </div>
      </div>

     
      <div className="about-details">
        <div className="about-text">
          <p>
            Whether you’re craving sizzling fast food, authentic Chinese cuisine,
            or exquisite continental dishes, <strong>CraveHub</strong> makes it effortless to satisfy your hunger.
            With features like personalized recommendations,
            budget-friendly options, and customer reviews, we empower you to make informed dining choices.
          </p>
        </div>
        <div className="about-img">
          <img src={aboutimg1} alt="About Us Image 1" />
          <div className="image1">
            <img src={aboutimg2} alt="About Us Image 2" />
          </div>
        </div>
      </div>
    </div>
  );
}
