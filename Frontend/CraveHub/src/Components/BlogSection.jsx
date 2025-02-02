import img1 from "../assets/image.svg";
import img2 from "../assets/img2.svg";
import img3 from "../assets/img3.svg";
import "./BlogSection.css";

export default function BlogSection() {
  return (
    <div className="blog-section">
          <div className="blog-heading">
                <h4>NEWS & BLOG</h4>
                <h2>Explore news & blog</h2>
          </div>
        <div className="blogs">
          <div className="blog-container">
            <div className="blog-img"> 
              <img src={img1}/>
               </div>
         
          <div className="blog-details">
            <div className="blog-styles"> 
            <h4>Fast Food</h4>
            <h5>29 Feb 2024</h5>
               </div>
            <p >Taste Sensations: Navigating The
Epicurean Landscape Of Restaurant
Name</p>
          </div>
          </div>

          <div className="blog-container">
            <div className="blog-img"> 
              <img src={img2}/>
               </div>
         
          <div className="blog-details">
          <div className="blog-styles"> 
          <h4>Fast Food</h4>
              <h5>29 Feb 2024</h5>
               </div>
            <p>Taste Sensations: Navigating The
Epicurean Landscape Of Restaurant
Name</p>
          </div>
          </div>

          <div className="blog-container">
            <div className="blog-img"> 
              <img src={img3}/>
               </div>
         
          <div className="blog-details">
          <div className="blog-styles"> 
              <h4>Fast Food</h4>
              <h5>29 Feb 2024</h5>
               </div>
            <p>Taste Sensations: Navigating The
Epicurean Landscape Of Restaurant
Name</p>
          </div>
          </div>
        </div>
      
    </div>
  )
}
