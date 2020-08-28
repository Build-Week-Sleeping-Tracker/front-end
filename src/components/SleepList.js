import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

import SleepCard from "./SleepCard";
import { fetchSleep } from "../actions";

const SleepList = () => {
    const dispatch = useDispatch();
    const entries = useSelector(state => state.entries)

  //console.log("this is props sleeplist.js", props);
  useEffect(() => {
    //dispatch(fetchSleep());
  }, []);

  return (
    <div>
      {entries.map((entry) => (
        <SleepCard entry={entry} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    error: state.error,
  };
};

const mapStateToDispatch = {
  // fetchSleep,
  // addSleep,
  //   updateSleep,
  //   deleteSleep,
};

export default SleepList;
//export default connect(mapStateToProps, mapStateToDispatch)(SleepList);
