import axios from "axios";

export const BASE_URL = "http://175.41.162.115:5000"; // ✅ export string

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance; // ✅ export instance too
