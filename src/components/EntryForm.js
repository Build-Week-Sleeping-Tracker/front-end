import React, { useState, useEffect } from "react";
import "../App.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import SleepList from "./SleepList";
import { addSleep } from "../actions";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";

import {
  faAngry,
  faMeh,
  faSmile,
  faGrinStars,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const EntryForm = (props) => {
  const { push } = useHistory();
  // console.log("this is my props for entryform", props);

  const [entry, setEntry] = useState({
    start_date_picker: "0",
    end_date_picker: "0",
    sleep_start: "0",
    sleep_end: "0",
    user_id: Number(localStorage.getItem("userId")),
    moods: {
      before_sleep: "",
      after_sleep: "",
      daytime: "",
    },
  });

  const [checked, setChecked] = useState(false);

  const onCheckedChange = (event) => {
    setEntry({
      ...entry,
      moods: {
        ...entry.moods,
        [event.target.name]: event.target.value,
      },
    });
  };

  const inputHandler = (e) => {
    setEntry({ ...entry, [e.target.name]: e.target.value });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    let sleep_start = `${entry.start_date_picker} ${entry.sleep_start}`;
    let sleep_end = `${entry.end_date_picker} ${entry.sleep_end}`;

    const newEntry = {
      sleep_start: sleep_start,
      sleep_end: sleep_end,
      user_id: Number(localStorage.getItem("userId")),
      moods: {
        before_sleep: entry.moods.before_sleep,
        after_sleep: entry.moods.after_sleep,
        daytime: entry.moods.daytime,
      },
    };
    console.log("this is onsubmit", newEntry);
    props.addSleep(newEntry);
    push(0);
  };

  return (
    <>
      <CardContainer>
        <h2>Sleep Journal Entry </h2>

        <form onSubmit={submitHandler}>
          <div className="datediv">
            <h3>Start Date and Time</h3>
            <input
              id="start_date_picker"
              //ref={register}
              type="date"
              name="start_date_picker"
              value={entry.start_date_picker}
              onChange={inputHandler}
              placeholder="HH:MM"
            />

            <label htmlFor="time">Time: </label>
            <input
              name="sleep_start"
              value={entry.sleep_start}
              onChange={inputHandler}
              type="time"
              //defaultValue={entryData.sleep_start}
              //ref={register}
            />
            <Container className="container">
              <fieldset>
                <EmojiWrap className="emoji-wrapper">
                  <FontAwesomeIcon icon={faAngry} />
                  <input
                    type="radio"
                    id="start_angry"
                    name="before_sleep"
                    value={1}
                    onChange={onCheckedChange}
                    //ref={register}
                  />
                </EmojiWrap>
                <EmojiWrap className="emoji-wrapper">
                  <FontAwesomeIcon icon={faMeh} />
                  <input
                    type="radio"
                    id="start_meh"
                    name="before_sleep"
                    value={2}
                    onChange={onCheckedChange}
                    //ref={register}
                  />
                </EmojiWrap>
                <EmojiWrap className="emoji-wrapper">
                  <FontAwesomeIcon icon={faSmile} />
                  <input
                    type="radio"
                    id="start_happy"
                    name="before_sleep"
                    value={3}
                    onChange={onCheckedChange}
                    //ref={register}
                  />
                </EmojiWrap>
                <EmojiWrap className="emoji-wrapper">
                  <FontAwesomeIcon icon={faGrinStars} />
                  <input
                    type="radio"
                    id="start_really_happy"
                    name="before_sleep"
                    value={4}
                    onChange={onCheckedChange}
                    //ref={register}
                  />
                </EmojiWrap>
              </fieldset>
            </Container>
          </div>
          <div className="datediv">
            <h3>End Date and Time</h3>
            <input
              id="end_date_picker"
              //ref={register}
              type="date"
              name="end_date_picker"
              value={entry.end_date_picker}
              onChange={inputHandler}
              placeholder="HH:MM"
            />

            <label htmlFor="time">Time: </label>
            <input
              name="sleep_end"
              value={entry.sleep_end}
              onChange={inputHandler}
              type="time"
              //defaultValue={entryData.sleep_start}
              //ref={register}
            />
            <Container className="container">
              <FlexFieldSet>
                <EmojiWrap className="emoji-wrapper">
                  <FontAwesomeIcon icon={faAngry} />
                  <input
                    type="radio"
                    id="end_angry"
                    name="after_sleep"
                    value={1}
                    onChange={onCheckedChange}
                    //ref={register}
                  />
                </EmojiWrap>
                <EmojiWrap className="emoji-wrapper">
                  <FontAwesomeIcon icon={faMeh} />
                  <input
                    type="radio"
                    id="end_meh"
                    name="after_sleep"
                    value={2}
                    onChange={onCheckedChange}
                    //ref={register}
                  />
                </EmojiWrap>
                <EmojiWrap className="emoji-wrapper">
                  <FontAwesomeIcon icon={faSmile} />
                  <input
                    type="radio"
                    id="end_happy"
                    name="after_sleep"
                    value={3}
                    onChange={onCheckedChange}
                    //ref={register}
                  />
                </EmojiWrap>
                <EmojiWrap className="emoji-wrapper">
                  <FontAwesomeIcon icon={faGrinStars} />
                  <input
                    type="radio"
                    id="end_really_happy"
                    name="after_sleep"
                    value={4}
                    onChange={onCheckedChange}
                    //ref={register}
                  />
                </EmojiWrap>
              </FlexFieldSet>
            </Container>
          </div>
          <h3>Overall mood For the Day</h3>
          <fieldset>
            <Container className="container">
              <EmojiWrap className="emoji-wrapper">
                <FontAwesomeIcon icon={faAngry} />
                <input
                  type="radio"
                  id="overall_angry"
                  name="daytime"
                  value={1}
                  onChange={onCheckedChange}
                  //ref={register}
                />
              </EmojiWrap>
              <EmojiWrap className="emoji-wrapper">
                <FontAwesomeIcon icon={faMeh} />
                <input
                  type="radio"
                  id="overall_meh"
                  name="daytime"
                  value={2}
                  onChange={onCheckedChange}
                  //ref={register}
                />
              </EmojiWrap>
              <EmojiWrap className="emoji-wrapper">
                <FontAwesomeIcon icon={faSmile} />
                <input
                  type="radio"
                  id="overall_happy"
                  name="daytime"
                  value={3}
                  onChange={onCheckedChange}
                  //ref={register}
                />
              </EmojiWrap>
              <EmojiWrap className="emoji-wrapper">
                <FontAwesomeIcon icon={faGrinStars} />
                <input
                  type="radio"
                  id="overall_really_happy"
                  name="daytime"
                  value={4}
                  onChange={onCheckedChange}
                  //ref={register}
                />
              </EmojiWrap>
            </Container>
          </fieldset>
          <Button onClick={submitHandler} type="submit">
            Submit Entry
          </Button>
        </form>
      </CardContainer>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    entries: state.entries,
    isFetching: state.isFetching,
    error: state.error,
  };
};

const mapStateToDispatch = {
  // fetchSleep,
  addSleep,
  // updateSleep,
  // deleteSleep,
};

export default connect(mapStateToProps, mapStateToDispatch)(EntryForm);
// export default EntryForm;

const Container = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: center;
`;

const EmojiWrap = styled.div`
  margin: 0px 10px;
  margin-bottom: 20px;
`;

const CardContainer = styled.div`
  border: 1px solid black;
  border-radius: 20px;
  margin: 25px;
  padding: 10px;
  text-align: center;
  background-color: #d1cbcb;
  width: 600px;
`;

const FlexFieldSet = styled.fieldset`
  display: inline-block;
`;

const Button = styled.button`
  background-color: #282c34;
  border-radius: 20px;
  padding: 5px 32px;
  font-size: 1.2rem;
  color: white;
  margin: 24px 0px;
`;

// const FlexCards = styled.div`
//   width: 100%;
// `;
