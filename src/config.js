import axios from "axios";

export const BASE_URL = "http://47.129.46.103:5000"; // ✅ export string

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance; // ✅ export instance too
