import { CustomerContactDto } from "../models/customer";

const BASE_URL = "http://localhost:8080/customers";

export const signup = async (data: CustomerContactDto) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.text();
};

export const login = async (data: CustomerContactDto) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.text();
};
