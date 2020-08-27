import React from "react";

const SleepCard = (props) => {
  return (
    <div>
      <h3>{props.data.sleep_start}</h3>
      <h3>{props.data.sleep_end}</h3>
      {/* <h3>{props.data.sleep_time_total}</h3> */}
      <h3>{}</h3>
      <h3>{}</h3>
      <h3>{}</h3>
    </div>
  );
};

export default SleepCard;
