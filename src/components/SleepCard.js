import React from "react";

const SleepCard = (props) => {
  return (
    <div>
      <h3>{props.entry.sleep_start}</h3>
      <h3>{props.entry.sleep_end}</h3>
      <h3>{props.entry.sleep_time_total}</h3>
      <h3>{}</h3>
      <h3>{}</h3>
      <h3>{}</h3>
    </div>
  );
};

export default SleepCard;
