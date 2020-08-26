import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useForm } from "react-hook-form";
import { date } from "yup";

const EntryForm = () => {
  const [entry, setEntry] = useState([]);
  const [entryData, setEntryData] = useState({
    date_start: new Date(),
    date_end: new Date(),
    sleep_start: "",
    sleep_end: "",
    sleep_start_mood: "",
    sleep_end_mood: "",
  });
  const { handleSubmit } = useForm();

  const [isLoading, setIsLoading] = useState(false);
  // const [startTime, setStartTime] = useState(null);
  // const [endTime, setEndTime] = useState(null);
  const [overallMood, setOverallMood] = useState(null);
  // const [chosenEmoji, setChosenEmoji] = useState(null);

  // const onEmojiClick = (event, emojiOblect) => {
  //   setChosenEmoji(emojiOblect);
  // };
  const onSubmit = (data) => {
    setIsLoading(true);

    setTimeout(() => {
      axiosWithAuth()
        .post("/api/sleep", data)
        .then((res) => {
          setIsLoading(false);
          setEntry(res.data);
        })
        .catch((err) => console.error(err));
    }, 1000);
  };

  const handleDateChange = (date) => {
    setEntryData({
      date_start: date,
    });
  };
  return (
    <div className="App">
      <h1> Sleep Tracker</h1>
      <div className="container1">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="datediv">
            <h3>Start Date and Time</h3>
            <DatePicker
              selected={entryData.date_start}
              onChange={handleDateChange}
              dateFormat="MM/dd/yyyy"
              minDate={new Date()}
              isClearable
              showYearDropdown
              scrollableYearDropdown
            />
            <input type="time" defaultValue={entryData.sleep_start}></input>
          </div>
          {/* <div className="datediv">
            <h3>End Date and Time</h3>
            <DatePicker
              selected={entryData.date_end}
              onChange={(date) => setEntryData(entryData.date_end)}
              dateFormat="MM/dd/yyyy"
              minDate={new Date()}
              isClearable
              showYearDropdown
              scrollableYearDropdown
            />
            <input type="time" value={entryData.sleep_end}></input>
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
          </div> */}
          <button type="submit">Submit Entry</button>
        </form>
      </div>
    </div>
  );
};

export default EntryForm;
