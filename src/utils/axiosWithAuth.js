import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("authToken");
  return axios.create({
    baseURL: "https://sleeptracker-back-end.onrender.com/api",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
