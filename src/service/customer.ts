import {CustomerModel } from "../models/customer";

const BASE_URL = "http://localhost:8080/customers";

export const signup = async (data: CustomerModel.CustomerContactDto) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.text();
};

export const login = async (data: CustomerModel.CustomerContactDto) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.json();
};

export const getCustomer = async (userId: number) => {
  const res = await fetch(`${BASE_URL}/${userId}`);
  return res.json();
};

export const updateCustomer = async (userId: number, data: CustomerModel.CustomerContactDto) => {
  const res = await fetch(`${BASE_URL}/update/${userId}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  return res.text();
};

export const deleteCustomer = async (userId: number) => {
  const res = await fetch(`${BASE_URL}/delete/${userId}`, {
    method: "DELETE",
  });
  return res.text();
};

