import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext.jsx";

// PrivateRoute component that wraps around protected routes
// eslint-disable-next-line no-unused-vars, react/prop-types
const PrivateRoute = ({ element, ...rest }) => {
  console.log(useAuth())

  return localStorage.getItem("userToken") ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
