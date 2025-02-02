import section from "../assets/section.png";
import phone from "../assets/phone.svg";
import menu from "../assets/menu.png.svg";
import dish from "../assets/img2.png.svg";
import deliver from "../assets/img3.png.svg";
import resturant from "../assets/restaurant.png";


import "./WorkSteps.css"
export default function WorkSteps() {
  return (
    <div className="steps-container">
            <div className='title'>
            <h2>How We Work</h2>
             </div>
   <div className="steps">
        <img src={section}/> 
           <h3>
               Easy Order in few Steps
           </h3>
<div className="steps-details">
     <div className="working"> 
     <div className="workpoints-0">
             <div className="img"> 
                 <img src={resturant} className="img0"/>
             </div>
             <h2>Explore Restaurant</h2>
             <p>
             Find your favorite Restaurant
             </p>
      
    </div>
         <div className="workpoints">
             <div className="img"> 
                 <img src={menu}/>
             </div>
             <h2>Explore Menu</h2>
             <p>
             Find your favorite Menu
             </p>
      
    </div>
    <div className="workpoints-1">
             <div className="img"> 
                 <img src={dish} className="img2" />
             </div>
             <h2>Choose a Dish</h2>
             <p>
             Find your favorite Dish
             </p>
      
    </div>

    <div className="workpoints-2">
             <div className="img"> 
                 <img src={deliver} className="img3"/>
             </div>
             <h2>Place Order</h2>
             <p>
             Deliver it at your address
             </p>
      
    </div> 

</div>
<img src={phone}/>
</div>

   </div>
      
    </div>
  )
}
