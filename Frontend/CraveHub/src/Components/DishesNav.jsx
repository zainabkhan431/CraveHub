import "./DishesNav.css"
export default function DishesNav() {
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar-dishes");
    if (window.scrollY > 524) { // Adjust this threshold as needed
      navbar.style.position = "fixed";
      navbar.style.top = "73px";
    } else {
      navbar.style.position = "absolute";
      navbar.style.top = " 525px"; // Reset to the original position
    }
  });
  
  return (
    <nav className="navbar-dishes">
    <ul className="dishes-links">
      <li>New </li>
      <li>Popular </li>
      <li>Family Deal </li>
      <li>Lunch Deals </li>
      <li>Beverages </li>
      <li>Appetizers </li>
    </ul>
  </nav>
  )
}
