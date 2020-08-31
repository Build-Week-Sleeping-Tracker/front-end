import React, { useState } from "react";
import styled from "styled-components";
import { deleteSleep, updateSleep } from "../actions";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";

const SleepCard = (props) => {
  // const dispatch = useDispatch();

  // const deleteCard = (id, entry) => {
  //   // console.log("this delete props", props.data);
  //   deleteSleep(id, entry);
  // };

  // const InitialEntries = {
  //   id: null,
  //   sleep_start: null,
  //   sleep_end: null,
  //   user_id: "",
  //   moods: {
  //     before_sleep: "",
  //     after_sleep: "",
  //     daytime: "",
  //   },
  // };

  // const [editing, setEditing] = useState(false);
  // const [entriesToEdit, setEntriesToEdit] = useState(InitialEntries);
  // const editCard = () => {
  //   setEditing(true);
  //   setEntriesToEdit();
  // };
  // const saveEdit = (e) => {
  //   e.preventDefault();
  //   updateSleep();
  // };

  console.log("this is props sleepcard.js", props);
  return (
    <StyledCard>
      <h2>Sleep Entry </h2>
      <h3>{`Entry Submitted at ${new Date(props.entry.sleep_start)}`}</h3>
      <p>{`I went to sleep at ${new Date(props.entry.sleep_start)}`}</p>
      <p>{`I woke up at ${new Date(props.entry.sleep_end)}`}</p>
      <p>{`I slept for ${props.entry.sleep_time_total} hours`}</p>
      <p>{`My mood when I went to sleep was at a number ${props.entry.moods.before_sleep}`}</p>
      {/* <button onClick={() => dispatch(deleteSleep(props.entry.id))}>
        Delete
      </button> */}

      {/* <button onClick={deleteCard(props.entry.id)}>Delete</button> */}

      {/* delete card */}
      {/* <span
        className="delete"
        onClick={(e) => {
          e.stopPropagation();
          deleteCard();
        }}
      >
        X
      </span> */}

      {/* {editing && (

        
        )} */}
    </StyledCard>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     isDeleting: state.isDeleting,
//     error: state.error,
//     data: state.data,
//     id: state.id,
//   };
// };

// const mapStateToDispatch = {
//   // fetchSleep,
//   // addSleep,
//   // updateSleep,
//   deleteSleep,
// };

// export default connect(mapStateToProps, mapStateToDispatch)(SleepCard);

export default SleepCard;

const StyledCard = styled.div`
  background-color: #d1cbcb;
  text-align: center;
`;
