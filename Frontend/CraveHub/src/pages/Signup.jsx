import  { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import login from "../assets/login.svg";
import "./Login.css";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const userData = { name, email, password, role: "user" }; // Adjust role as needed
    try {
      const response = await fetch("http://localhost:5000/api/users/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        // Redirect or handle success
        navigate("/login"); // Redirect to login page after successful registration
      } else {
        setError(data.message || "Something went wrong");
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError("Error connecting to the server");
    }
  };

  return (
    <div className="login-page">
      <div className="login-img">
        <img src={login} alt="login" />
      </div>
      <div className="login-form">
        <h2>Create an Account</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
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
          <input
            type="password"
            placeholder="Confirm password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <div className="login-checkbox">
            <input
              type="checkbox"
              id="terms"
              checked={terms}
              onChange={() => setTerms(!terms)}
            />
            <label htmlFor="terms">I agree to the terms & conditions</label>
          </div>
          <button type="submit" className="sign-up-btn" disabled={!terms}>
            Register
          </button>
        </form>
        <p>
          Already have an account?{" "}
          <Link to="/login" className="login-link">
            Sign in Here
          </Link>
        </p>
      </div>
    </div>
  );
}
