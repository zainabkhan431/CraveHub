import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import login from "../assets/login.svg";
import "./Login.css";
import { useAuth } from "../AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {user} = useAuth()
  const handleSubmit = async (e) => {
    e.preventDefault();

    const loginData = { email, password };

    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        // Save the token to localStorage or state
        localStorage.setItem("userToken", data.token);

        // Redirect to a protected page or dashboard after login
        navigate("/"); // Redirect to the dashboard or home page
      } else {
        setError(data.message || "Invalid email or password");
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Error connecting to the server");
    }
  };
  useEffect(()=> {
    if(user) {
      window.location.href= "/"
    }
  }, [user])
  return (
    <div className="login-page">
      <div className="login-img">
        <img src={login} alt="login" />
      </div>
      <div className="login-form">
        <h2>Login</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="sign-up-btn">Login</button>
        </form>
      </div>
    </div>
  );
}
