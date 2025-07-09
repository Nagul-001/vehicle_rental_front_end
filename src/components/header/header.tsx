import React from "react";
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
