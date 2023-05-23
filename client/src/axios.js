import axios from "axios";

// const baseURL = "http://localhost:5000/api";
// const baseURL = "https://video-sharing-app-yt.vercel.app/api";
const baseURL = " https://agreeable-bat-gown.cyclic.app/api";

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "Bearer " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInstance;
