import axios from "axios";
// import { store } from "../store";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL + "/api/",
  headers: { "Content-Type": "application/json" },
});

// axiosInstance.interceptors.request.use(
//   (config) => {
//     const token = store.getState().auth.token;
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

// axiosInstance.interceptors.response.use(
//   (response) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       console.error("Unauthorized, logging out...");
//       localStorage.removeItem("token");
//       localStorage.removeItem("user");
//       window.location.href = "/home";
//     }
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
