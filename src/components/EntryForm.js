import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

const EntryForm = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [overallMood, setOverallMood] = useState(null);
  // const [chosenEmoji, setChosenEmoji] = useState(null);

  // const onEmojiClick = (event, emojiOblect) => {
  //   setChosenEmoji(emojiOblect);
  // };

  return (
    <div className="App">
      <h1> Sleep Tracker</h1>
      <div className="container1">
        <form>
          <div className="datediv">
            <h3>Start Date and Time</h3>
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="MM/dd/yyyy"
              minDate={new Date()}
              isClearable
              showYearDropdown
              scrollableYearDropdown
            />
            <input type="time"></input>
          </div>
          <div className="datediv">
            <h3>End Date and Time</h3>
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="MM/dd/yyyy"
              minDate={new Date()}
              isClearable
              showYearDropdown
              scrollableYearDropdown
            />
            <input type="time"></input>
          </div>
          <div className="datediv lastdiv">
            <h3>Overall Mood Throughout Day</h3>
            <DatePicker
              selected={overallMood}
              onChange={(date) => setOverallMood(date)}
              dateFormat="MM/dd/yyyy"
              minDate={new Date()}
              isClearable
              showYearDropdown
              scrollableYearDropdown
            />
            <input type="time"></input>
          </div>
          <button>Submit Entry</button>
        </form>
      </div>
    </div>
  );
};

export default EntryForm;
