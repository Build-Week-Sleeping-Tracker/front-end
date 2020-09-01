import React, { useState } from "react";
import styled from "styled-components";
import { updateSleep } from "../actions";
import { connect } from "react-redux";

// const initialEntry = {
//   sleep_start: "0",
//   sleep_start: "0",
//   sleep_end: "0",
//   sleep_time_total: "0",
//   moods: {
//     before_sleep: "",
//   },
// };

const EditCard = (props) => {
  console.log("this is EditCard props", props);

  const [updating, setUpdating] = useState(false);
  const [entryToUpdate, setEntryToUpdate] = useState(props.entry);

  const editEntry = (entry) => {
    setUpdating(true);
    setEntryToUpdate(entry);
  };

  const saveUpdate = (e) => {
    e.preventDefault();
    props.updateSleep(entryToUpdate.id);
  };

  // const handleChange = (e) => {
  //   setEntryToUpdate( {...entryToUpdate, props.entry: e.target.value})
  // }

  return (
    <>
      <CardContainer>
        <h3>Entry Submitted at </h3>

        <form onSubmit={saveUpdate}>
          <div className="datediv">
            <h3>Start Date and Time</h3>
            <input
              id="start_date_picker"
              //ref={register}
              type="date"
              name="start_date_picker"
              value={entryToUpdate.start_date_picker}
              onChange={(e) =>
                setEntryToUpdate({
                  ...entryToUpdate,
                  [e.target.name]: e.target.value,
                })
              }
              placeholder="HH:MM"
            />

            <label htmlFor="time">Time: </label>
            <input
              name="sleep_start"
              value={entryToUpdate.sleep_start}
              onChange={(e) =>
                setEntryToUpdate({
                  ...entryToUpdate,
                  [e.target.name]: e.target.value,
                })
              }
              type="time"
              //defaultValue={entryData.sleep_start}
              //ref={register}
            />
          </div>
          <button>Edit</button>
          <button type="submit">Update</button>
          <button onClick={() => setUpdating(false)}>Cancel</button>
        </form>
      </CardContainer>
    </>
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

//styling
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
