import React, { useState, useEffect } from "react";
import "../App.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Sleeplist from "./SleepList";
// import { fetchSleep } from "../actions";
// import { connect } from "react-redux";

import {
  faAngry,
  faMeh,
  faSmile,
  faGrinStars,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const EntryForm = () => {
  // console.log("this is my props for entryform", props);
  const [entry, setEntry] = useState([]);

  const [entryData, setEntryData] = useState({
    sleep_start: "0",
    sleep_end: "0",
    user_id: "",
    moods: {
      before_sleep: "",
      after_sleep: "",
      daytime: "",
    },
  });

  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    const stored = {
      start_date: `${data.start_date_picker} ${data.start_time}`,
      end_date: `${data.end_date_picker} ${data.end_time}`,
      before_sleep_mood: data.start_mood,
      after_sleep_mood: data.end_mood,
      daytime_mood: data.overall_mood,
    };

    console.log("Form Data being posted", data);
    console.log("formatted", stored.start_date, stored.end_date);

    axiosWithAuth()
      .post("/sleep", {
        sleep_start: stored.start_date,
        sleep_end: stored.end_date,
        user_id: data.user_id,
        moods: {
          before_sleep: stored.before_sleep_mood,
          after_sleep: stored.after_sleep_mood,
          daytime: stored.daytime_mood,
        },
      })
      .then((res) => {
        console.log("rh: POST success: res ", res);
        setEntry(res.data);
      })
      .catch((err) => console.error(err.response.data));

    reset();
  };

  useEffect(() => {
    axiosWithAuth()
      .get("/sleep")
      .then((res) => {
        console.log("this is get success entryform.js", res.data);
        setEntry(res.data);
      });
  }, []);

  return (
    <>
      <CardContainer>
        <h2>Sleep Journal Entry </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="datediv">
            <h3>Start Date and Time</h3>
            <input
              id="start_date_picker"
              ref={register}
              type="date"
              name="start_date_picker"
              placeholder="HH:MM"
            />

            <label htmlFor="time">Time: </label>
            <input
              name="start_time"
              type="time"
              defaultValue={entryData.sleep_start}
              ref={register}
            />
            <Container className="container">
              <fieldset>
                <EmojiWrap className="emoji-wrapper">
                  <FontAwesomeIcon icon={faAngry} />
                  <input
                    type="radio"
                    id="start_angry"
                    name="start_mood"
                    value={1}
                    ref={register}
                  />
                </EmojiWrap>
                <EmojiWrap className="emoji-wrapper">
                  <FontAwesomeIcon icon={faMeh} />
                  <input
                    type="radio"
                    id="start_meh"
                    name="start_mood"
                    value={2}
                    ref={register}
                  />
                </EmojiWrap>
                <EmojiWrap className="emoji-wrapper">
                  <FontAwesomeIcon icon={faSmile} />
                  <input
                    type="radio"
                    id="start_happy"
                    name="start_mood"
                    value={3}
                    ref={register}
                  />
                </EmojiWrap>
                <EmojiWrap className="emoji-wrapper">
                  <FontAwesomeIcon icon={faGrinStars} />
                  <input
                    type="radio"
                    id="start_really_happy"
                    name="start_mood"
                    value={4}
                    ref={register}
                  />
                </EmojiWrap>
              </fieldset>
            </Container>
          </div>
          <div className="datediv">
            <h3>End Date and Time</h3>
            <input
              id="end_date_picker"
              ref={register}
              type="date"
              name="end_date_picker"
              placeholder="HH:MM"
            />

            <label htmlFor="time">Time: </label>
            <input
              name="end_time"
              type="time"
              defaultValue={entryData.sleep_start}
              ref={register}
            />
            <Container className="container">
              <FlexFieldSet>
                <EmojiWrap className="emoji-wrapper">
                  <FontAwesomeIcon icon={faAngry} />
                  <input
                    type="radio"
                    id="end_angry"
                    name="end_mood"
                    value={1}
                    ref={register}
                  />
                </EmojiWrap>
                <EmojiWrap className="emoji-wrapper">
                  <FontAwesomeIcon icon={faMeh} />
                  <input
                    type="radio"
                    id="end_meh"
                    name="end_mood"
                    value={2}
                    ref={register}
                  />
                </EmojiWrap>
                <EmojiWrap className="emoji-wrapper">
                  <FontAwesomeIcon icon={faSmile} />
                  <input
                    type="radio"
                    id="end_happy"
                    name="end_mood"
                    value={3}
                    ref={register}
                  />
                </EmojiWrap>
                <EmojiWrap className="emoji-wrapper">
                  <FontAwesomeIcon icon={faGrinStars} />
                  <input
                    type="radio"
                    id="end_really_happy"
                    name="end_mood"
                    value={4}
                    ref={register}
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
                  name="overall_mood"
                  value={1}
                  ref={register}
                />
              </EmojiWrap>
              <EmojiWrap className="emoji-wrapper">
                <FontAwesomeIcon icon={faMeh} />
                <input
                  type="radio"
                  id="overall_meh"
                  name="overall_mood"
                  value={2}
                  ref={register}
                />
              </EmojiWrap>
              <EmojiWrap className="emoji-wrapper">
                <FontAwesomeIcon icon={faSmile} />
                <input
                  type="radio"
                  id="overall_happy"
                  name="overall_mood"
                  value={3}
                  ref={register}
                />
              </EmojiWrap>
              <EmojiWrap className="emoji-wrapper">
                <FontAwesomeIcon icon={faGrinStars} />
                <input
                  type="radio"
                  id="overall_really_happy"
                  name="overall_mood"
                  value={4}
                  ref={register}
                />
              </EmojiWrap>
            </Container>
          </fieldset>
          <Button type="submit">Submit Entry</Button>
        </form>
      </CardContainer>
      <FlexCards>
        <Sleeplist entries={entry} />
      </FlexCards>
    </>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     entries: state.entries,
//     isFetching: state.isFetching,
//     error: state.error,
//   };
// };

// const mapStateToDispatch = {
//   fetchSleep,
// addSleep,
//   updateSleep,
//   deleteSleep,
// };

// export default connect(mapStateToProps, mapStateToDispatch)(EntryForm);
export default EntryForm;

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

const FlexCards = styled.div`
  width: 100%;
`;
