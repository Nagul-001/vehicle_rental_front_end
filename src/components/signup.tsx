import React, { useState } from "react";
import { CustomerModel } from "../models/customer";
import { signup } from "../service/customer";
import "./signup.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const Signup: React.FC = () => {
  const [formData, setFormData] = useState<CustomerModel.CustomerContactDto>({
    fullName: "",
    licenseNumber: "",
    phoneNumber: "",
    email: "",
    address: "",
    password: "",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); 

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await signup(formData);
    setMessage(res);

    if (res === "Signup successful") {
      navigate("/Home"); 
    }
  }

  return (
    <div className="form-container">
      <div className="form-nav">
       
      </div>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input name="fullName" placeholder="Full Name" onChange={handleChange} required />
        <input name="licenseNumber" placeholder="License Number" onChange={handleChange} />
        <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} required />
        <input name="address" placeholder="Address" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit">Signup</button>
      </form>
      <p>{message}</p>
       <Link to="/" className="form-nav-link">Already have an account? Login</Link>
    </div>
  );
};


export default Signup;
