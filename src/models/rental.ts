
import { CustomerModel } from "./customer";
import { Vehicle } from "./vehicle";

export namespace RentalModel{
    export interface Rental extends CustomerModel.Customer{
  rentalId: number;
  customer: CustomerModel.Customer;
  vehicle: Vehicle;
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
