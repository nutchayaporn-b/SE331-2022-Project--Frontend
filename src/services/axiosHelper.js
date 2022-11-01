import axios from "axios";

const axiosHelper = axios.create({
  baseURL: "http://localhost:8080",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

axiosHelper.interceptors.request.use(
  (request) => {
    const token = localStorage.getItem("token");
    if (token) request.headers["Authorization"] = "Bearer " + token;
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosHelper;
