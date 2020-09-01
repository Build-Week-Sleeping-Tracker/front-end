import React from "react";
import { connect } from "react-redux";
import { deleteSleep } from "../actions";

const DeleteCard = (props) => {
  console.log("this delete props", props);
  props.deleteSleep();

  return (
    <span
      className="delete"
      onClick={(e) => {
        e.stopPropagation();
        deleteCard();
      }}
    >
      X
    </span>
  );
};

const mapStateToProps = (state) => {
  return {
    isDeleting: state.isDeleting,
    error: state.error,
    data: state.data,
    id: state.id,
  };
};

const mapStateToDispatch = {
  // fetchSleep,
  // addSleep,
  // updateSleep,
  deleteSleep,
};

export default connect(mapStateToProps, mapStateToDispatch)(DeleteCard);
