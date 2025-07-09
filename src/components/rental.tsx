
import React, { useEffect, useState } from "react";
import { Vehicle } from "../models/vehicle";
import { RentalModel } from "../models/rental";
import { CustomerModel} from "../models/customer";
import { getAllVehicles } from "../service/vehicle-service";
import { createRental } from "../service/rental-service";
import "./rental.css";
import { useLocation } from "react-router-dom";

const RentVehicle: React.FC = () => {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);

  const [message, setMessage] = useState("");
  const location = useLocation();
  const [formData, setFormData] = useState<RentalModel.rentalFormParams>(RentalModel.initialFormData)
  

  const customer: CustomerModel.Customer = {
    customerId: Number(localStorage.getItem("userId")),
    fullName: "",
    licenseNumber:""
  };

  useEffect(() => {
    const fetchVehicles = async () => {
      const data = await getAllVehicles();
      const available = data.filter((v:Vehicle) => v.status === "available");
      setVehicles(available);
    };
    fetchVehicles();

    if(location.state != null) {

    const selectedVehicleId = location.state as { vehicleId?: number };
    setFormData((prevFormData)=>{
      return{
        ...prevFormData,
        "vehicleId":selectedVehicleId.vehicleId ? selectedVehicleId.vehicleId : 0
      }
    })
    
    }

  }, []);

  const handleRent = async () => {
    const selectedVehicle = vehicles.find((v) => v.vehicleId === formData.vehicleId);
    if (!selectedVehicle) return;

    const days =
      (new Date(formData.returnDate).getTime() - new Date(formData.rentDate).getTime()) /
      (1000 * 60 * 60 * 24);
    const total = days * selectedVehicle.rentalRate;

    const rental: RentalModel.Rental = {
      customer,
      vehicle: selectedVehicle,
      rentDate: formData.rentDate,
      returnDate: formData.returnDate,
      totalAmount: total,
      status: "rented",
      customerId: 0,
      fullName: "",
      licenseNumber: "",
      rentalId: 0
    };

    try {
      const res = await createRental(rental);
      setMessage("Vehicle rented successfully!");
       localStorage.setItem("lastRentalId", res.rentalId.toString());
    } catch (err) {
      setMessage("Error renting vehicle.");
    }
  };

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
    const {name,value} = e.target
    setFormData((prevFormData)=>{
        return{
            ...prevFormData,
            [name]:value
        }
    })
  }

  return (
    <div className="rent-form">
      <h2>Rent a Vehicle</h2>
      <select onChange={handleInputChange} value={formData.vehicleId}>
        <option value="">Select Vehicle</option>
        {vehicles.map((v) => (
          <option key={v.vehicleId} value={v.vehicleId}>
            {v.brand.brandName} - {v.model}
          </option>
        ))}
      </select>
      <input
        type="date"
        name="rentDate"
        value={formData.rentDate}
        onChange={handleInputChange}
        required
      />
      <input
        type="date"
        name="returnDate"
        value={formData.returnDate}
        onChange={handleInputChange}
        required
      />
      <button onClick={handleRent}>Rent</button>
      <p>{message}</p>
    </div>
  );
};

export default RentVehicle;
