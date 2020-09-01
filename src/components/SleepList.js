import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import SleepCard from "./SleepCard";

const SleepList = (props) => {
  const dispatch = useDispatch();
  const entries = useSelector((state) => state.entries);

  //console.log("this is props sleeplist.js", props);
  useEffect(() => {
    //dispatch(fetchSleep());
  }, [entries]);

  return (
    <div>
      {entries.map((entry) => (
        <SleepCard entry={entry} />
      ))}
    </div>
  );
};

const mapStateToDispatch = {
  // fetchSleep,
  // addSleep,
  //   updateSleep,
  //   deleteSleep,
};

export default SleepList;
//export default connect(mapStateToProps, mapStateToDispatch)(SleepList);
