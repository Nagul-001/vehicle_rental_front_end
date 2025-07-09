
import React, { useEffect, useState } from "react";
import { RentalModel } from "../../models/rental";
import { getRentalById, returnRental } from "../../service/rental-service";
import "./return-vehicle.css";


const ReturnVehicle: React.FC = () => {
  const [rental, setRental] = useState<RentalModel.Rental[] | null>(null);
  const [message, setMessage] = useState("");

  const rentalIdStr = localStorage.getItem("lastRentalId");
  const rentalId = rentalIdStr ? Number(rentalIdStr) : undefined;

  useEffect(() => {
    const fetchRental = async () => {
      if (rentalId === undefined) {
        setMessage("No rental found to return.");
        return;
      }

      try {
        const rentalData = await getRentalById(rentalId);
        setRental(rentalData);
      } catch (error) {
        setMessage("Failed to fetch rental details.");
      }
    };

    fetchRental();
  }, [rentalId]);

  const handleReturn = async (rentalId:number) => {
    if (!rental) return;

    try {
      await returnRental(rentalId);
      setMessage("Vehicle returned successfully!");
    } catch (error) {
      setMessage("Error while returning vehicle.");
    }
  };

  return (
    <div className="rent-form">
      <h2>Return Vehicle</h2>
      {rental ? rental.map((rental)=>{
        return (
        <div>
          <p><strong>Vehicle:</strong> {rental.vehicle.brand.brandName} - {rental.vehicle.model}</p>
          <p><strong>Rental Period:</strong> {rental.rentDate} to {rental.returnDate}</p>
          <p><strong>Total Amount:</strong> ₹{rental.totalAmount}</p>
          <button onClick={()=>handleReturn(rental.rentalId)}>Return</button>
        </div>
      )
      })  : (
        <p>Loading rental info...</p>
      )}
      <p>{message}</p>
     
    </div>
  );
};

export default ReturnVehicle;
