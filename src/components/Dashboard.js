import React, { useState } from "react";

import EntryForm from "./EntryForm";
import SleepList from "./SleepList";

const Dashboard = () => {
  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("/sleep")
  //     .then((res) => {
  //       console.log("rh: Dashboard.js:", res.data);
  //       setEntries(res.data);
  //     });
  // }, []);

  return (
    <>
      <EntryForm />
<<<<<<< HEAD
=======
      <SleepList />

      {/* I think Ideally here should be a component with the ability to add a new entry which Aaron is working on. Plus we will make a get request returning data of all entries submitted by the user and with that we will return those using map to iterate through the data. */}
>>>>>>> 56205a12e8a4fb582b8830132f53b78a3a7f1568
    </>
  );
};

export default Dashboard;
