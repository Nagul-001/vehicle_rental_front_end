
export interface VehicleBrand {
  brandId: number;
  brandName: string;
  
}

export interface Vehicle {
  vehicleId: number;
  registrationNumber: string;
  model: string;
  year: number;
  rentalRate: number;
  status: string;
  brand: VehicleBrand;
  createdAt: string;
  modifiedAt: string;
}

