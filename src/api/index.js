import axios from "axios";
import { clearCookie } from "./auth";

// const axiosSecure = axios.create({
//   baseURL: "http://localhost:9000",
//   withCredentials: true,
// });
const axiosSecure = axios.create({
  baseURL: "https://pollinate-server.vercel.app",
  withCredentials: true,
});

axiosSecure.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    if (
      (err.response && err.response.status == 401) ||
      err.response.status == 403
    ) {
      await clearCookie();
      window.location.replace("/login");
    }
    return Promise.reject(err);
  }
);

export default axiosSecure;
