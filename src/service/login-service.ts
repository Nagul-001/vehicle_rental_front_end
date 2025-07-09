import { useState } from "react";
import { CustomerModel } from "../models/customer";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "./constant/apiurl";

const LoginService=()=>{

    const [credentials, setCredentials] = useState<Partial<CustomerModel.CustomerContactDto>>({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (credentials.email && credentials.password) {
        const res = await fetch(`${BASE_URL}/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(credentials),
        });

        const data = await res.json()
        
        if (data.code===200) {
            localStorage.setItem("userId",JSON.stringify(data.data));
            navigate("/Home"); 
        }
        else{
            setMessage(data.message);
        }
        }
    };

    return{
        handleChange,
        handleSubmit,
        message
    }
}

export default LoginService;