import React, { useState } from "react";

import { login } from "../service/customer";
import "./login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CustomerModel } from "../models/customer";


const LoginForm: React.FC = () => {
  const [credentials, setCredentials] = useState<Partial<CustomerModel.CustomerContactDto>>({
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
      const res = await login(credentials as CustomerModel.CustomerContactDto) as CustomerModel.Retval;
      
      if (res.code===200) {
        localStorage.setItem("userId",JSON.stringify(res.data));
        navigate("/Home"); 
      }
      else{
        setMessage(res.message);
      }
    }
  };

  return (
    <div className="form-container">
      <div className="form-nav">
      </div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required className="input-field"/>
        <input name="password" type="password" placeholder="Password" onChange={handleChange} className="input-field" required />
        <button type="submit">Login</button>
      </form>
      <p>{message}</p>
      <Link to="/signup" className="form-nav-link">Don't have an account? Signup</Link>

    </div>
  );
};

export default LoginForm;
