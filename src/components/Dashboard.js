import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const Dashboard = () => {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    axiosWithAuth()
      .get("/api/sleep")
      .then((res) => {
        console.log(res.data);
        setEntries(res.data);
      });
  }, []);

  return (
    <>
      <h2>THIS IS THE DASHBOARD *WINK WINK*</h2>

      {/* I think Ideally here should be a component with the ability to add a new entry which Aaron is working on. Plus we will make a get request returning data of all entries submitted by the user and with that we will return those using map to iterate through the data. */}
    </>
  );
};

export default Dashboard;
