import React from "react";
import styled from "styled-components";
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
      {/* <EntryForm /> */}
      <FlexCards>
        <SleepList />
      </FlexCards>
    </>
  );
};

export default Dashboard;

const FlexCards = styled.div`
  width: 100%;
`;
