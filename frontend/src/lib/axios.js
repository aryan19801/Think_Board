import axios from "axios";
const api = axios.create({
    baseURL: import.meta.env.NODE_URI === "production" ? "https://think-board-w2ye.onrender.com/api" : "http://localhost:5001/api",
    withCredentials: true
});
export default api;