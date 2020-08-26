import React, { useState } from "react";
import "../App.css";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import {
  faAngry,
  faMeh,
  faSmile,
  faGrinStars,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const EntryForm = () => {
  const [entry, setEntry] = useState([]);
  const [entryData, setEntryData] = useState({
    sleep_start: "null",
    sleep_end: null,
    user_id: 1,
    moods: {
      before_sleep: "",
      after_sleep: "",
      daytime: "",
    },
  });

  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    const date = moment(`${data.date_picker} ${data.time}`).format("X");
    console.log("formatted", date);

    console.log("THIS IS STUFF THAT SUCKS", data);

    axiosWithAuth()
      .post("/api/sleep", {
        sleep_start: date,
        user_id: data.user_id,
      })
      .then((res) => {
        setEntry(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <CardContainer>
      <h2>Sleep Journal Entry </h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="datediv">
          <h3>Start Date and Time</h3>
          <input
            id="date_picker"
            ref={register}
            type="date"
            name="date_picker"
            placeholder="HH:MM"
          />

          <label htmlFor="time">Time: </label>
          <input
            name="time"
            type="time"
            defaultValue={entryData.sleep_start}
            ref={register}
          />
          <Container className="container">
            <EmojiWrap className="emoji-wrapper">
              <FontAwesomeIcon icon={faAngry} />
              <input type="radio" id="angry" name="angry" value={1} />
            </EmojiWrap>
            <EmojiWrap className="emoji-wrapper">
              <FontAwesomeIcon icon={faMeh} />
              <input type="radio" id="meh" name="meh" value={2} />
            </EmojiWrap>
            <EmojiWrap className="emoji-wrapper">
              <FontAwesomeIcon icon={faSmile} />
              <input type="radio" id="happy" name="happy" value={3} />
            </EmojiWrap>
            <EmojiWrap className="emoji-wrapper">
              <FontAwesomeIcon icon={faGrinStars} />
              <input
                type="radio"
                id="really_happy"
                name="really_happy"
                value={4}
              />
            </EmojiWrap>
          </Container>
        </div>
        <div className="datediv">
          <h3>End Date and Time</h3>
          <input
            id="date_picker"
            ref={register}
            type="date"
            name="date_picker"
            placeholder="HH:MM"
          />

          <label htmlFor="time">Time: </label>
          <input
            name="time"
            type="time"
            defaultValue={entryData.sleep_start}
            ref={register}
          />
          <Container className="container">
            <EmojiWrap className="emoji-wrapper">
              <FontAwesomeIcon icon={faAngry} />
              <input type="radio" id="angry" name="angry" value={1} />
            </EmojiWrap>
            <EmojiWrap className="emoji-wrapper">
              <FontAwesomeIcon icon={faMeh} />
              <input type="radio" id="meh" name="meh" value={2} />
            </EmojiWrap>
            <EmojiWrap className="emoji-wrapper">
              <FontAwesomeIcon icon={faSmile} />
              <input type="radio" id="happy" name="happy" value={3} />
            </EmojiWrap>
            <EmojiWrap className="emoji-wrapper">
              <FontAwesomeIcon icon={faGrinStars} />
              <input
                type="radio"
                id="really_happy"
                name="really_happy"
                value={4}
              />
            </EmojiWrap>
          </Container>
        </div>
        <h3>Overall mood For the Day</h3>
        <Container className="container">
          <EmojiWrap className="emoji-wrapper">
            <FontAwesomeIcon icon={faAngry} />
            <input type="radio" id="angry" name="angry" value={1} />
          </EmojiWrap>
          <EmojiWrap className="emoji-wrapper">
            <FontAwesomeIcon icon={faMeh} />
            <input type="radio" id="meh" name="meh" value={2} />
          </EmojiWrap>
          <EmojiWrap className="emoji-wrapper">
            <FontAwesomeIcon icon={faSmile} />
            <input type="radio" id="happy" name="happy" value={3} />
          </EmojiWrap>
          <EmojiWrap className="emoji-wrapper">
            <FontAwesomeIcon icon={faGrinStars} />
            <input
              type="radio"
              id="really_happy"
              name="really_happy"
              value={4}
            />
          </EmojiWrap>
        </Container>
        <button type="submit">Submit Entry</button>
      </form>
    </CardContainer>
  );
};

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
  margin: 25px;
  padding: 10px;
  text-align: center;
`;
