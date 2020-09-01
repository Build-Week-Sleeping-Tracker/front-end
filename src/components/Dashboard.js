import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EntryForm from "./EntryForm";
import SleepList from "./SleepList";
import { connect } from "react-redux";
import { fetchSleep, deleteSleep } from "../actions";
import EditCard from "./EditCard";

const Dashboard = (props) => {
  console.log("this is Dasboard props", props);
  const [entry, setEntry] = useState([]);
  // const [dependency, setDependency] = useState(false);

  useEffect(() => {
    props.fetchSleep();
  }, []);

  return (
    <>
      {/* EntryForm has the post/addSleep actions and the isPosting reducer */}
      <EntryForm
        key={entry.id}
        entry={entry}
        // updateEntry={setEntry}
        // setDependency={setDependency}
      />

      {/* SleepList has the the get/fetchSleep and the isFetching reducer */}
      <FlexCards>
        <SleepList key={entry.id} entry={entry} updateEntry={setEntry} />
      </FlexCards>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    // isDeleting: state.isDeleting,
    error: state.error,
    data: state.data,
  };
};

const mapStateToDispatch = {
  fetchSleep,
  // addSleep,
  // updateSleep,
  // deleteSleep,
};

export default connect(mapStateToProps, mapStateToDispatch)(Dashboard);

// export default Dashboard;

const FlexCards = styled.div`
  width: 100%;
`;
