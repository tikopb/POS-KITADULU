import axios from "axios";

export const baseUrl = "http://localhost:4000";

export default axios.create({
  baseURL: baseUrl,
});

export const axiosPrivate = axios.create({
  baseURL: baseUrl,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});
