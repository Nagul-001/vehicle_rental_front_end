import React from "react";
import { useNavigate } from "react-router-dom";
import "./logout.css"; 
import { logout } from "../../service/logout";

const LogoutButton: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return <button className="logout-button" onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
