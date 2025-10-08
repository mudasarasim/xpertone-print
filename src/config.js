import axios from "axios";

const BASE_URL = "http://175.41.162.115:5000";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
