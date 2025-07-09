import { useState } from "react";
import { CustomerModel } from "../models/customer";
import { useNavigate } from "react-router-dom";
import { signup } from "./customer";
import { BASE_URL } from "./constant/apiurl";

const SignUpService=()=>{
    const [formData, setFormData] = useState<CustomerModel.CustomerContactDto>({
        fullName: "",
        licenseNumber: "",
        phoneNumber: "",
        email: "",
        address: "",
        password: "",
      });
      const [message, setMessage] = useState("");
      const navigate = useNavigate(); 
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await fetch(`${BASE_URL}/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
    });

        const data=await res.json();
        if (data === "Signup successful") {
          navigate("/"); 
        }
      }
      
      return{
            handleChange,
            handleSubmit,
            message
      }
}

export default SignUpService;