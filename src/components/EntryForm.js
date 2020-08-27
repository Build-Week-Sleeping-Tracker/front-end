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
    const start_date = moment(
      `${data.start_date_picker} ${data.start_time}`
    ).format("X");
    const end_date = moment(`${data.end_date_picker} ${data.end_time}`).format(
      "X"
    );
    console.log("formatted", start_date, end_date);

    console.log("THIS IS STUFF THAT SUCKS", data);

    axiosWithAuth()
      .post("/api/sleep", {
        sleep_start: start_date,
        sleep_end: end_date,
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
  border-radius: 20px;
  margin: 25px;
  padding: 10px;
  text-align: center;
  background-color: #d1cbcb;
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
