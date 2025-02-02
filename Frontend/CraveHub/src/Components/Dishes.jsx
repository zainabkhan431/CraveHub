import yums1 from "../assets/yums3.png";
import DishCard from "./DishCard";
import "./Dishes.css"
import DishesNav from "./DishesNav";
import BudgetInput from "./BudgetInput";

export default function Dishes() {
  return (
    <div>
      <img src={yums1} className="header-image"/>
     <DishesNav/>
  <BudgetInput/>
  <DishCard/>
     
    </div>
  )
}
