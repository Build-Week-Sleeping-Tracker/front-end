import React from "react";
import styled from "styled-components";

const SleepCard = (props) => {
  console.log("this is props sleepcard.js", props);
  return (
    <StyledCard>
      <h2>Sleep Entry </h2>
      <h3>{`Entry Submitted at ${new Date(props.entry.sleep_start)}`}</h3>
      <p>{`I went to sleep at ${new Date(props.entry.sleep_start)}`}</p>
      <p>{`I woke up at ${new Date(props.entry.sleep_end)}`}</p>
      <p>{`I slept for ${props.entry.sleep_time_total} hours`}</p>
      <p>{`My mood when I went to sleep was at a number ${props.entry.moods.before_sleep}`}</p>
    </StyledCard>
  );
};

export default SleepCard;

const StyledCard = styled.div`
  background-color: #d1cbcb;
  text-align: center;
`;
