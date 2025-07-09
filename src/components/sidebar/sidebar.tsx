import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

const Sidebar: React.FC = () => {
  return (
    <div className="sidebar">
      <h2 className="sidebar-title">Rental App</h2>
      <ul className="sidebar-links">
        <li>
          <Link to="/home"> Home</Link>
        </li>
        <li>
          <Link to="/vehicles"> Vehicles</Link>
        </li>
        <li>
          <Link to="/rent"> Rent</Link>
        </li>
        <li>
          <Link to="/return"> Return</Link>
        </li>
        <li>
          <Link to="/profile"> My Profile</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
