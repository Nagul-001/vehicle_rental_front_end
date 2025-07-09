import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";
import SignUpService from "../../service/signup-service";


const Signup: React.FC = () => {
  const {
      handleChange,
      handleSubmit,
      message
  }=SignUpService()

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
