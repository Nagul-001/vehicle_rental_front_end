
// const BASE_URL = "http://localhost:8080";

// export const getAllVehicles = async () => {
//   const res = await fetch(`${BASE_URL}/all-vehicles`);
//   return res.json();
// };
import { useEffect, useState } from "react";
import { VehicleInterface } from "../models/vehicle";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:8080";

const VehicleService = () => {
  const [vehicles, setVehicles] = useState<VehicleInterface.Vehicle[]>([]);
  const navigate = useNavigate();

  const getAllVehicles = async () => {
    const res = await fetch(`${BASE_URL}/all-vehicles`);
    const data = await res.json();
    setVehicles(data);
  };

  useEffect(() => {
    getAllVehicles();
  }, []);

  const handleNavigateRent = (vehicleId: number) => {
    navigate("/rent", { state: { vehicleId } });
  };

  return {
    vehicles,
    handleNavigateRent,
  };
};

export default VehicleService;