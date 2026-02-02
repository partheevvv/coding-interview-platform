import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true, //this helps to send the cookies (for authorization) to the server automatically
})

export default axiosInstance;