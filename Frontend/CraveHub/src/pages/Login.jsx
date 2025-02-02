import login from "../assets/login.svg";
import "./Login.css";
export default function Login() {
  return (
    <div className="login-page">
      <div className="login-img">
        <img src={login}/>
      </div>
      <div className="login-form">
  <h2>Login</h2>
  <form>
    
    <input type="email" placeholder="E-mail" />
    <input type="password" placeholder="Password" />
   
    <button className="sign-up-btn">Login</button>
  </form>
 
</div>

      
    </div>
  )
}

