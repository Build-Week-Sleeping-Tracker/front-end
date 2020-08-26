// import axios from "axios";

// export const FETCH_START = "FETCH_START";
// export const FETCH_SUCCESS = "FETCH_SUCCESS";
// export const FETCH_FAILURE = "FETCH_FAILURE";
// export const ADD_DATA = "ADD_DATA";
// export const UPDATE_DATA = "UPDATE_DATA";
// export const DELETE_DATA = "DELETE_DATA";

// export const fetchData = () => (dispatch) => {
//   dispatch({ type: FETCH_START });

//   axios
//     .get("https://webpt15-sleep-tracker-api.herokuapp.com/api/sleep")
//     .then((res) => {
//       //   console.log(res.data);
//       dispatch({
//         type: FETCH_SUCCESS,
//         payload: res.data,
//       });
//     })

//     .post("https://webpt15-sleep-tracker-api.herokuapp.com/api/sleep")
//     .then((res) => {
//       //   console.log(res.data);
//       dispatch({
//         type: UPDATE_DATA,
//         payload: res.data,
//       });
//     })

//     .put(
//       "https://webpt15-sleep-tracker-api.herokuapp.com/api/sleep/:id",
//       updateData
//     )
//     .then((res) => {
//       //   console.log(res.data);
//       dispatch({
//         type: ADD_DATA,
//         payload: res.data,
//       });
//     })

//     .delete(
//       "https://webpt15-sleep-tracker-api.herokuapp.com/api/sleep/:id",
//       deleteData
//     )
//     .then((res) => {
//       //   console.log(res.data);
//       dispatch({
//         type: DELETE_DATA,
//         payload: res.data,
//       });
//     })

//     .catch((err) => {
//       console.log(err.message);
//       dispatch({
//         type: FETCH_FAILURE,
//         payload: err.message,
//       });
//     });
// };
