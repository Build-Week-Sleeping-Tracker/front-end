import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("authToken");
  return axios.create({
    baseURL: "https://webpt15-sleep-tracker-api.herokuapp.com",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
