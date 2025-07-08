
import { RentalModel } from "../models/rental";

const BASE_URL = "http://localhost:8080/rentals";

export const createRental = async (rental: RentalModel.Rental)=> {
  const response = await fetch(`${BASE_URL}/`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(rental),
  });

  if (!response.ok) {
    throw new Error("Failed to rent vehicle");
  }

  return response.json();
};


