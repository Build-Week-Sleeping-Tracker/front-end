import React from "react";
// import { connect } from "react-redux";

import SleepCard from "./SleepCard";

const SleepList = (props) => {
  console.log("this is props sleeplist.js", props);
  // useEffect(() => {
  //   props.fetchSleep();
  // }, []);

  return (
    <div>
      {props.entries.map((entry) => (
        <SleepCard entry={entry} />
      ))}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     isFetching: state.isFetching,
//     error: state.error,
//   };
// };

// const mapStateToDispatch = {
// fetchSleep,
// addSleep,
//   updateSleep,
//   deleteSleep,
// };

export default SleepList;
// connect(mapStateToProps, mapStateToDispatch)(SleepList);
