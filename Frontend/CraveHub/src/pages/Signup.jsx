import { Link } from "react-router-dom";
import login from "../assets/login.svg";
import "./Login.css";
export default function Signup() {
  return (
    <div className="login-page">
      <div className="login-img">
        <img src={login}/>
      </div>
      <div className="login-form">
  <h2>Create an Account</h2>
  <form>
    <input type="text" placeholder="Name" />
    <input type="email" placeholder="E-mail" />
    <input type="password" placeholder="Password" />
    <input type="password" placeholder="Confirm password" />
    <div className="login-checkbox">
      <input type="checkbox" id="terms" />
      <label htmlFor="terms">I agree terms & conditions</label>
    </div>
    <button className="sign-up-btn">Register</button>
  </form>
  <p>
    Already have an account?  <Link to="/login" className="login-link">Sign in Here</Link>
  </p>
</div>

      
    </div>
  )
}


