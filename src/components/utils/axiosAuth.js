import axios from "axios";

export const axiosAuth = () => {
  // #2 retrieving from the local storage
  const token = window.localStorage.getItem("token");
  return axios.create({
    //every time this function is called the header sends the token
    headers: { authorization: token },
    baseURL: "https://webpt15-sleep-tracker-api.herokuapp.com",
  });
};
