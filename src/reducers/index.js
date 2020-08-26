import {
  //get
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  //post
  ADD_START,
  ADD_SUCCESS,
  ADD_FAILURE,
  //put
  UPDATE_START,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
  //delete
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_FAILURE,
} from "../actions";

const initialState = {
  isFetching: false,
  fetchError: null,
  sleep: [], // need an empty array so that the .map has somewhere to place its new array
  user_id: "",
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    // axios.get = read
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: null,
        sleep: [],
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        sleep: action.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        sleep: [],
      };

    // axios.post = create
    case ADD_START:
      return {
        ...state,
        isFetching: true,
        error: null,
        sleep: [],
      };
    case ADD_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        sleep: action.payload,
      };
    case ADD_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        sleep: [],
      };

    // axios.put = update
    case UPDATE_START:
      return {
        ...state,
        isFetching: true,
        error: null,
        sleep: [],
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        sleep: action.payload,
      };
    case UPDATE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        sleep: [],
      };

    // axios.delete = delete
    case DELETE_START:
      return {
        ...state,
        isFetching: true,
        error: null,
        sleep: [],
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        sleep: action.payload,
      };
    case DELETE_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        sleep: [],
      };

    default:
      return state;
  }
};
