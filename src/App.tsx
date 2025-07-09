import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import SignupForm from "./components/signup";
import LoginForm from "./components/login";
import Home from "./components/home";
import Vehicles from "./components/vehicle";
import RentVehicle from "./components/rental";
import "./App.css";
import ProtectedRoute from "./components/protectedRoutes";
import ReturnVehicle from "./components/return-vehicle";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
       
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />

       
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/rent" element={<RentVehicle />} />
          <Route path="/return" element={<ReturnVehicle />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
