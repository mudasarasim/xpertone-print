import axios from "axios";

export const BASE_URL = "https://xpertoneprints.com:5000"; // ✅ export string

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance; // ✅ export instance too
