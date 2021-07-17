import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

const url = "http://localhost:5000/";

export const signUp = (formData) =>
  API.post("/api/auth/register", { formData });
export const login = (formData) => API.post("/api/auth/login", { formData });
export const getUserInfo = (config) => API.get("/api/private", config);
