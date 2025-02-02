import { BrowserRouter as Router, Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantCategory from "./pages/RestaurantNames.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx"
import ResturantDishes from "./pages/ResturantDishes.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import RestaurantCategories from "./pages/RestaurantCategories.jsx";
import RestaurantAbout from "./pages/RestaurantAbout.jsx";
import RestaurantBlogs from "./pages/RestaurantBlogs.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";

// import Navbar from "./Components/Navbar";
// import Header from "./Components/Header";
// import Categories from "./Components/Categories";
// import Title from "./Components/Title";
// import Resturant from "./Components/Resturant";
// import BlogSection from "./Components/BlogSection";
// import About from "./Components/About";

export default function App() {
  return (
    <>
    
    <Router>
    
       <ScrollToTop/>
    <Routes>
     
      <Route path="/" element={<Home/>} />
      <Route path="/restaurant-details" element={<RestaurantCategory />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
<Route path="/RestaurantCategories" element={<RestaurantCategories/>}/>
<Route path="/RestaurantAbout" element={<RestaurantAbout/>}/>
<Route path="/RestaurantBlogs" element={<RestaurantBlogs/>}/>
<Route path="/BlogDetail" element={<BlogDetail/>}/>
<Route path="/RestaurantBlogs/BlogDetail" element={<BlogDetail/>}/>

      <Route path="/restaurant-dishes" element={ <ResturantDishes/>} />
     
    </Routes>
  </Router>
  </>
  );
}
