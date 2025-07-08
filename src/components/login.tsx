import React, { useState } from "react";
import { CustomerContactDto } from "../models/customer";
import { login } from "../service/customer";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const LoginForm: React.FC = () => {
  const [credentials, setCredentials] = useState<Partial<CustomerContactDto>>({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (credentials.email && credentials.password) {
      const res = await login(credentials as CustomerContactDto);
      setMessage(res);
      console.log(res);
      if (res === "Login successful") {
        navigate("/Home"); 
      }
    }
  };

  return (
    <div className="form-container">
      <div className="form-nav">
      </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
      <Link to="/signup" className="form-nav-link">Don't have an account? Signup</Link>

    </div>
  );
};

export default LoginForm;
