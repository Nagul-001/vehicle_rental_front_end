
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


export const getRentalById = async (rentalId: number) => {
  const response = await fetch(`${BASE_URL}/${rentalId}`);
  if (!response.ok) throw new Error("Failed to fetch rental");
  return await response.json();
};


export const returnRental = async (rentalId: number) => {
  const response = await fetch(`${BASE_URL}/return/${rentalId}`, {
    method: "PUT",
  });
  if (!response.ok) throw new Error("Failed to return vehicle");
};
