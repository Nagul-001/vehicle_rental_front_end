import { Vehicle } from "../models/vehicle";

const BASE_URL = "http://localhost:8080";

export const getAllVehicles = async () => {
  const res = await fetch(`${BASE_URL}/all-vehicles`);
  return res.json();
};
