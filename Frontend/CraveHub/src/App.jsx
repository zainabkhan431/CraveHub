import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RestaurantCategory from "./pages/RestaurantNames.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import ResturantDishes from "./pages/ResturantDishes.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import RestaurantCategories from "./pages/RestaurantCategories.jsx";
import RestaurantAbout from "./pages/RestaurantAbout.jsx";
import RestaurantBlogs from "./pages/RestaurantBlogs.jsx";
import BlogDetail from "./pages/BlogDetail.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import { AuthProvider } from "./AuthContext.jsx";
import AddRestaurant from "./pages/AddResturant.jsx";
import Dashboard from "./pages/Dashboard.jsx";



export default function App() {
  return (
    <>
    <AuthProvider>
      <Router>
        <ScrollToTop />
        <Routes>
        <Route
            path="/"
            element={<PrivateRoute element={<Home />} />}
          />
          <Route path="/" element={<Home />} />
          <Route path="/restaurant-details" element={<PrivateRoute element={<RestaurantCategory />} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route
            path="/RestaurantCategories"
            element={<PrivateRoute element={<RestaurantCategories />} />}
          />

          <Route path="/RestaurantAbout" element={<PrivateRoute element={<RestaurantAbout />} />} />
          <Route path="/restaurants" element={<AddRestaurant />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/RestaurantBlogs" element={<PrivateRoute element={<RestaurantBlogs />} />} />
          <Route path="/BlogDetail" element={<PrivateRoute element={<BlogDetail />} />} />
          <Route path="/RestaurantBlogs/BlogDetail" element={<PrivateRoute element={<BlogDetail />} />} />

          <Route path="/ResturantDishes" element={<PrivateRoute element={<ResturantDishes />} />} />
        </Routes>
      </Router>
      </AuthProvider>
    </>
  );
}
