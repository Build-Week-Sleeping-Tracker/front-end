<<<<<<< HEAD
import React from "react";
import { connect } from "react-redux";

import SleepCard from "./SleepCard";

const SleepList = (props) => {
  console.log("this is props sleeplist.js", props);
  // useEffect(() => {
  //   props.fetchSleep();
  // }, []);
=======
import React, { useEffect } from "react";
import { connect } from "react-redux";

import SleepCard from "./SleepCard";
import { fetchSleep, addSleep } from "../actions";

const SleepList = (props) => {
  useEffect(() => {
    props.fetchSleep();
  }, []);
>>>>>>> 56205a12e8a4fb582b8830132f53b78a3a7f1568

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
<<<<<<< HEAD
=======
    entries: state.entries,
>>>>>>> 56205a12e8a4fb582b8830132f53b78a3a7f1568
    isFetching: state.isFetching,
    error: state.error,
  };
};

const mapStateToDispatch = {
<<<<<<< HEAD
  // fetchSleep,
  // addSleep,
=======
  fetchSleep,
  addSleep,
>>>>>>> 56205a12e8a4fb582b8830132f53b78a3a7f1568
  //   updateSleep,
  //   deleteSleep,
};

export default connect(mapStateToProps, mapStateToDispatch)(SleepList);
