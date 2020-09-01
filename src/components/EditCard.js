import React, { useState } from "react";
import styled from "styled-components";
import { updateSleep } from "../actions";
import { connect } from "react-redux";

const initialEntry = {
  sleep_start: "0",
  sleep_start: "0",
  sleep_end: "0",
  sleep_time_total: "0",
  moods: {
    before_sleep: "",
  },
};

const EditCard = (props) => {
  console.log("this is EditCard props", props);

  const [updating, setUpdating] = useState(false);
  const [entryToUpdate, setEntryToUpdate] = useState(initialEntry);

  const editEntry = (entry) => {
    setUpdating(true);
    setEntryToUpdate(entry);
  };

  const saveUpdate = (e) => {
    e.preventDefault();
    props.updateSleep();
  };

  return (
    <div>
      <button type="submit">Update</button>
      <button>Cancel</button>
      {/* onClick={() => setUpdating(false)} */}
    </div>
  );
};

//connect to Redux
const mapStateToProps = (state) => {
  return {
    isPutting: state.isPutting,
    error: state.error,
    data: state.data,
  };
};

const mapStateToDispatch = {
  // fetchSleep,
  // addSleep,
  updateSleep,
  // deleteSleep,
};

export default connect(mapStateToProps, mapStateToDispatch)(EditCard);
