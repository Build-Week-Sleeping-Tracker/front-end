import React, { useEffect } from "react";
import { connect } from "react-redux";

import SleepCard from "./SleepCard";
import { fetchSleep, addSleep } from "../actions";

const SleepList = (props) => {
  useEffect(() => {
    props.fetchSleep();
  }, []);

  return (
    <div>
      {props.entries.map((entry) => (
        <SleepCard entry={entry} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    entries: state.entries,
    isFetching: state.isFetching,
    error: state.error,
  };
};

const mapStateToDispatch = {
  fetchSleep,
  addSleep,
  //   updateSleep,
  //   deleteSleep,
};

export default connect(mapStateToProps, mapStateToDispatch)(SleepList);
