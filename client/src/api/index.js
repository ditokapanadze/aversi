import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5001" });

const url = "/";

export const signUp = (formData) =>
  API.post("/api/auth/register", { formData });
export const login = (formData) => API.post("/api/auth/login", { formData });
export const getUserInfo = (config) => API.get("/api/private", config);
export const getProduct = (page, filter) =>
  API.get(`/api/product/getproducts/${page}/${filter}`);
