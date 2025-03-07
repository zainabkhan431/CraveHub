/* eslint-disable react/prop-types */
import  { createContext, useState, useContext, useEffect } from "react";

// Create AuthContext
const AuthContext = createContext();

// Provide AuthContext to the app
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check if the user is logged in by checking for a token in localStorage
  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      setUser({ token }); // Here you could decode the token and get user info
    }
  }, []);

  const login = (userData) => {
    localStorage.setItem("userToken", userData.token); // Store token
    setUser(userData);
  };

  const logout = () => {
    localStorage.removeItem("userToken"); // Remove token
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook to use AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
