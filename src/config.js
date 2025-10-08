import axios from 'axios';

// ✅ Change this to your live API URL when you deploy
const BASE_URL = 'http://175.41.162.115:5000'; // or e.g. 'https://api.xpertone-print.com'

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

export default axiosInstance;
