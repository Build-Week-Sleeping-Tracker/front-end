import React from "react";

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
    </>
  );
};

export default Dashboard;
