import { axiosWithAuth } from "./utils/axiosWithAuth";

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAILURE = "FETCH_FAILURE";

// get = read
export const fetchSleep = () => (dispatch) => {
  dispatch({ type: FETCH_START });

  axiosWithAuth()
    .get("/api/sleep")
    .then((res) => {
      console.log("get success", res.data);
      dispatch({
        type: FETCH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      console.log("error", err);
      dispatch({ type: FETCH_FAILURE, payload: err });
    });

  // post = create
  export const ADD_START = "ADD_START";
  export const ADD_SUCCESS = "ADD_SUCCESS";
  export const ADD_FAILURE = "ADD_FAILURE";

  export const addSleep = (entry) => (dispatch) => {
    dispatch({ type: ADD_START });

    axiosWithAuth()
      .post(`/api/sleep${id}`, entry)
      .then((res) => {
        console.log("post success", res.data);
        dispatch({ type: ADD_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log("error", err);
        dispatch({ type: ADD_FAILURE, payload: err });
      });
  };

  // put = update
  export const UPDATE_START = "UPDATE_START";
  export const UPDATE_SUCCESS = "UPDATE_SUCCESS";
  export const UPDATE_FAILURE = "UPDATE_FAILURE";

  export const updateSleep = (entries) => (dispatch) => {
    dispatch({ type: UPDATE_START });

    axiosWithAuth()
      .put(`/api/sleep/${id}`, entry)
      .then((res) => {
        console.log("put success", res.data);
        dispatch({ type: UPDATE_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log("error", err);
        dispatch({ type: UPDATE_FAILURE, payload: err });
      });
  };

  // delete = delete
  export const DELETE_START = "DELETE_START";
  export const DELETE_SUCCESS = "DELETE_SUCCESS";
  export const DELETE_FAILURE = "DELETE_FAILURE";

  export const deleteSleep = (entry) => (dispatch) => {
    dispatch({ type: DELETE_START });

    axiosWithAuth()
      .delete(`/api/sleep/${id}`, entry)
      .then((res) => {
        console.log("delete success", res.data);
        dispatch({ type: DELETE_SUCCESS, payload: res.data });
      })
      .catch((err) => {
        console.log("error", err);
        dispatch({ type: DELETE_FAILURE, payload: err });
      });
  };
};
