import axios from "axios";

// ✅ Define the base URL directly here — no .env needed
const BASE_URL = "http://175.41.162.115:5000"; // change this when you deploy

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
