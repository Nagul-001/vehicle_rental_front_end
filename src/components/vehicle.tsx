
import React, { useEffect, useState } from "react";
import { Vehicle } from "../models/vehicle";
import { getAllVehicles } from "../service/vehicle-service";
import "./vehicles.css";

const Vehicles: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  useEffect(() => {
    const fetchVehicles = async () => {
      const data = await getAllVehicles();
      setVehicles(data);
    };

    fetchVehicles();
  }, []);

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
        </div>
      ))}
    </div>
  );
};

export default Vehicles;
