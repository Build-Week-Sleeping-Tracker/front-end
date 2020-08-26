import React, { useState } from "react";
import { connect } from "react-redux";
import { fetchSleep, addSleep, updateSleep, deleteSleep } from "../actions";



const SleepForm = (props) => {

    const [] = useState();



    const inputHandler = (e) => {};




    const submitHandler = (e) => {};



    const clearHandler = () => {};


    return ();



}



const mapStateToProps = (state) => {
  return {
    sleep: state.sleep,
    isFetching: state.isFetching,
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
