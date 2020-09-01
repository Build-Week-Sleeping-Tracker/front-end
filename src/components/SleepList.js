import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSleep, deleteSleep } from "../actions";
import SleepCard from "./SleepCard";

const SleepList = (props) => {
  console.log("this is props from fetchSleep", props);
  useEffect(() => {
    props.fetchSleep();
  }, []);

  return (
    <div>
      {/* {props.isFetching && <div> is loading </div>} */}
      {props.data.map((entry) => (
        <SleepCard key={entry.id} entry={entry} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isFetching: state.isFetching,
    isDeleting: state.isDeleting,
    error: state.error,
    data: state.data,
  };
};

const mapStateToDispatch = {
  fetchSleep,
  // addSleep,
  // updateSleep,
  deleteSleep,
};

export default connect(mapStateToProps, mapStateToDispatch)(SleepList);
// export default SleepList;
