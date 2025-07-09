import React from "react";
import "./login.css";
import { Link } from "react-router-dom";
import LoginService from "../../service/login-service";


const LoginForm: React.FC = () => {
  const {
    handleChange,
    handleSubmit,
    message
  } = LoginService()

  return (
    <div className="form-container">
      <div className="form-nav">
      </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} className="input-field" required/>
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="input-field" required />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
      <Link to="/signup" className="form-nav-link">Don't have an account? Signup</Link>

    </div>
  );
};

export default LoginForm;
