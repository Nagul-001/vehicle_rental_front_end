import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="app-title">Vehicle Rental Management</h1>
        <p className="tagline">Efficient, Reliable & Easy Booking</p>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/signup" className="nav-link">Signup</Link>
          <Link to="/login" className="nav-link">Login</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
