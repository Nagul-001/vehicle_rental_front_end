
import React from "react";
import "./vehicles.css";
import VehicleService from "../../service/vehicle-service";



const Vehicles: React.FC = () => {
  const {
    handleNavigateRent,
    vehicles
  }=VehicleService()
  // const [vehicles, setVehicles] = useState<VehicleInterface.Vehicle[]>([]);
  // const navigate = useNavigate()

  // useEffect(() => {
  //   const fetchVehicles = async () => {
  //     const data = await getAllVehicles();
  //     setVehicles(data);
  //   };

  //   fetchVehicles();
  // }, []);

  // const handleNavigateRent = (vehicleId:number) => {
  //   console.log(vehicleId)
  //   navigate("/rent", { state: { vehicleId } });
  // }

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
