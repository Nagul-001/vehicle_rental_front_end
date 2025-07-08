
import React, { useEffect, useState } from "react";
import { Vehicle } from "../models/vehicle";
import { getAllVehicles } from "../service/vehicle-service";
import "./vehicles.css";
import { useNavigate } from "react-router-dom";

const Vehicles: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchVehicles = async () => {
      const data = await getAllVehicles();
      setVehicles(data);
    };

    fetchVehicles();
  }, []);

  const handleNavigateRent = (vehicleId:number) => {
    console.log(vehicleId)
    navigate("/rent", { state: { vehicleId } });
  }

  return (
    <div className="vehicles-container">
      {vehicles.map((vehicle) => (
        <div key={vehicle.vehicleId} className="vehicle-card">
          <h3 className="vehicle-title">
            {vehicle.brand.brandName} - {vehicle.model}
          </h3>
          <p>Registration: {vehicle.registrationNumber}</p>
          <p>Year: {vehicle.year}</p>
          <p>Rate: ₹{vehicle.rentalRate}/day</p>
          <p>Status: {vehicle.status}</p>
          {vehicle.status == "available" && <button onClick={()=>handleNavigateRent(vehicle.vehicleId)}>Rent</button>}
        </div>
      ))}
    </div>
  );
};

export default Vehicles;
