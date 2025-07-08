import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="app-title">Vehicle Rental Management</h1>
        <p className="tagline">Efficient, Reliable & Easy Booking</p>
      </div>
    </header>
  );
};

export default Header;
