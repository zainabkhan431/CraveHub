import "./Feedback.css";
import banner1 from "../assets/banner1.svg";
import banner2 from "../assets/banner2.svg";
import banner3 from "../assets/banner3.svg";

export default function Feedback() {
  return (
    <div className="testimonials">

    
    <div className="feedback">
     
        <div className="feedback-heading">
              <h3>
              Testimonials & Reviews
              </h3>
              <h2>
                  Our Customer Feedbacks
              </h2>
       </div>
       <div className="feedback-img">
       <img src={banner1} className="img1"/>
       <img src={banner2} className="img2"/>
       <img src={banner3} className="img3"/>
       </div>
        
        <div className="reviews">
      
            <li className="feedback-card">
                <p className="feedback-description">A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food. All great deedsand all great thoughts</p>
                <h3 className="feedback-title">Bratlee Hamint</h3>
                <div className="circle"></div>
            </li>
            <li className="feedback-card">
                <p className="feedback-description">A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food. All great deedsand all great thoughts</p>
                <h3 className="feedback-title">Bratlee Hamint</h3>
                <div className="circle"></div>
            </li>
            <li className="feedback-card">
                <p className="feedback-description">A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food. All great deedsand all great thoughts</p>
                <h3 className="feedback-title">Bratlee Hamint</h3>
                <div className="circle"></div>
            </li>
         
        </div>
      
    </div>
    </div>
  )
}
