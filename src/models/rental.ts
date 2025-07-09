
import { CustomerModel } from "./customer";
import { VehicleInterface } from "./vehicle";


export namespace RentalModel{
    export interface Rental extends CustomerModel.Customer{
  rentalId: number;
  customer: CustomerModel.Customer;
  vehicle: VehicleInterface.Vehicle;
  rentDate: string;
  returnDate: string;
  totalAmount: number;
  status: string;
}

    export interface rentalFormParams {
        vehicleId:number,
        rentDate:string,
        returnDate:string
    }

    export const initialFormData = {
        vehicleId:0,
        rentDate:"",
        returnDate:"",
    }
}
