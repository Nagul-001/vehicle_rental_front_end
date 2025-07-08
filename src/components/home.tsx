import React from "react";
import "./home.css";

const Home: React.FC = () => {
  const userId=localStorage.getItem("userId")
  return (
    <div className="home-container">

      Welcome to Vehicle Rental Management
    </div>
  );
};

export default Home;
