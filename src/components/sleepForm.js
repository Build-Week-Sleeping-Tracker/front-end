import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchSleep, addSleep, updateSleep, deleteSleep } from "../actions";

const SleepForm = (props) => {
  const [entries, setEntries] = useState({
    sleep_start: "",
    sleep_end: "",
    before_sleep_mood: "",
    after_sleep_mood: "",
  });

  const inputHandler = (e) => {
    setEntries({ ...entries, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.addSleep(entries);
  };

  const clearHandler = () => {
    setEntries({
      sleep_start: "",
      sleep_end: "",
      before_sleep_mood: "",
      after_sleep_mood: "",
    });
  };

  return (
    <div>
      <form>
        <label htmlFor="name">Sleep Start Time</label>
        <input
          type="text"
          name="Start"
          label="Sleep Start Time"
          placeholder="Enter start time of your sleep"
          value={props.sleep_start}
          onChange={inputHandler}
          className="input"
        />

        <label htmlFor="name">Sleep End Time</label>
        <input
          type="text"
          name="Start"
          label="Sleep End Time"
          placeholder="Enter end time of your sleep"
          value={props.sleep_end}
          onChange={inputHandler}
          className="input"
        />
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    entries: state.entries,
    isPosting: state.isPosting,
    error: state.error,
  };
};

const mapStateToDispatch = {
  fetchSleep,
  addSleep,
  updateSleep,
  deleteSleep,
};

export default connect(mapStateToProps, mapStateToDispatch)(SleepForm);
