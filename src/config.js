import axios from 'axios';

// ✅ Single place to define base URL
const axiosInstance = axios.create({
  baseURL: 'http://175.41.162.115:5000', // Change this to your live API URL when deployed
});

export default axiosInstance;
