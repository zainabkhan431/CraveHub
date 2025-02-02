import "./BlogHeader.css";
import { Link } from "react-router-dom";
import blog1 from "../assets/blog1.svg";
export default function BlogHeader() {
  return (
    <div>
     <div className="blog-header">
      <h2>Everything you need to know about Food-o-pedia
      </h2>
      <p>Acquiring knowledge is an integral component of life, especially about food. 
        At CraveHub, discover interesting food blogs, read them, and learn more! </p>
    </div>
    <div className="blogs-section">
        <div className="blog-data">
            <div className="blog-image">
              <img src={blog1}/>
            </div>
            <div className="blog-description">
            <Link to="BlogDetail">
                <h2>WHO’s Impending Declaration: Artificial Sweeteners
                     in Diet Coke and Their Potential Link to Cancer</h2>
                     </Link>
                     <div className="specifications">
                     <p>Foodies pakistan</p>
                     <p>July 04,2024</p>
                      <p>Beverages</p>
                     </div>
                <div className="blog-para">
               <p>In recent years, the safety of artificial sweeteners has come under scrutiny,
               with concerns being raised about their potential health…
                </p> 
                </div>
                <Link to="/BlogDetail"><button className="blog-btn">Read More </button></Link>


            </div>
        </div>

        <div className="blog-data">
            <div className="blog-image">
              <img src={blog1}/>
            </div>
            <div className="blog-description">
            <Link to="BlogDetail">
               <h2>WHO’s Impending Declaration: Artificial Sweeteners
                     in Diet Coke and Their Potential Link to Cancer</h2>
                     </Link>
                     <div className="specifications">
                     <p>Foodies pakistan</p>
                     <p>July 04,2024</p>
                      <p>Beverages</p>
                     </div>
                <div className="blog-para">
               <p>In recent years, the safety of artificial sweeteners has come under scrutiny,
               with concerns being raised about their potential health…
                </p> 
                </div>
                <Link to="/BlogDetail"><button className="blog-btn">Read More </button></Link>

            </div>
        </div>

        <div className="blog-data">
            <div className="blog-image">
              <img src={blog1}/>
            </div>
            <div className="blog-description">
            <Link to="BlogDetail">
               <h2>WHO’s Impending Declaration: Artificial Sweeteners
                     in Diet Coke and Their Potential Link to Cancer</h2>
                     </Link>
                     <div className="specifications">
                     <p>Foodies pakistan</p>
                     <p>July 04,2024</p>
                      <p>Beverages</p>
                     </div>
                <div className="blog-para">
               <p>In recent years, the safety of artificial sweeteners has come under scrutiny,
               with concerns being raised about their potential health…
                </p> 
                </div>
                <Link to="/BlogDetail"><button className="blog-btn">Read More </button></Link>


            </div>
        </div>

        <div className="blog-data">
            <div className="blog-image">
              <img src={blog1}/>
            </div>
            <div className="blog-description">
            <Link to="BlogDetail">
               <h2>WHO’s Impending Declaration: Artificial Sweeteners
                     in Diet Coke and Their Potential Link to Cancer</h2>
                     </Link>
                     <div className="specifications">
                     <p>Foodies pakistan</p>
                     <p>July 04,2024</p>
                      <p>Beverages</p>
                     </div>
                <div className="blog-para">
               <p>In recent years, the safety of artificial sweeteners has come under scrutiny,
               with concerns being raised about their potential health…
                </p> 
                </div>
               <Link to="/BlogDetail"><button className="blog-btn">Read More </button></Link>


            </div>
        </div>

        <div className="blog-data">
            <div className="blog-image">
              <img src={blog1}/>
            </div>
            <div className="blog-description">
            <Link to="BlogDetail">
               <h2>WHO’s Impending Declaration: Artificial Sweeteners
                     in Diet Coke and Their Potential Link to Cancer</h2>
                     </Link>
                     <div className="specifications">
                     <p>Foodies pakistan</p>
                     <p>July 04,2024</p>
                      <p>Beverages</p>
                     </div>
                <div className="blog-para">
               <p>In recent years, the safety of artificial sweeteners has come under scrutiny,
               with concerns being raised about their potential health…
                </p> 
                </div>
               <Link to="/BlogDetail"><button className="blog-btn">Read More </button></Link>


            </div>
        </div>

        <div className="blog-data">
            <div className="blog-image">
              <img src={blog1}/>
            </div>
            <div className="blog-description">
              <Link to="BlogDetail">
               <h2>WHO’s Impending Declaration: Artificial Sweeteners
                     in Diet Coke and Their Potential Link to Cancer</h2>
                     </Link>
                     <div className="specifications">
                     <p>Foodies pakistan</p>
                     <p>July 04,2024</p>
                      <p>Beverages</p>
                     </div>
                <div className="blog-para">
               <p>In recent years, the safety of artificial sweeteners has come under scrutiny,
               with concerns being raised about their potential health…
                </p> 
                </div>
               <Link to="/BlogDetail"><button className="blog-btn">Read More </button></Link>


            </div>
        </div>

    </div>
    </div>
  )
}
