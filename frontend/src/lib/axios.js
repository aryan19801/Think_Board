import axios from "axios";

const api = axios.create({
    baseURL: "https://think-board-w2ye.onrender.com/api",
    withCredentials: true,
});

export default api;