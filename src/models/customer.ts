export namespace CustomerModel{
  export interface CustomerContactDto {
    fullName: string;
    licenseNumber: string;
    phoneNumber: string;
    email: string;
    address: string;
    password: string;
  }

  export interface Customer{
    customerId:number;
    fullName: string;
    licenseNumber: string;
  }
  export interface Retval {
    code:number;
    message:string;
    data:number;
  }
}
  