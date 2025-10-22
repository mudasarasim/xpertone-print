import axios from "axios";

export const BASE_URL = "https://xpertoneprints.com"; // ✅ export string

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance; // ✅ export instance too
