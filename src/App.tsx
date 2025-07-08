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

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />

        {/* Protected Routes (includes Sidebar via ProtectedRoute) */}
        <Route element={<ProtectedRoute />}>
          <Route path="/home" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/rent" element={<RentVehicle />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
