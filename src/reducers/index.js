import {
  FETCH_START,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ADD_DATA,
  UPDATE_DATA,
  DELETE_DATA,
} from "../actions";

const initialState = {
  isFetching: false,
  fetchError: null,
  data: [], // need an empty array so that the .map has somewhere to place its new array
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: null,
        quotes: [],
      };

    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        quotes: action.payload,
      };

    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
        quotes: [],
      };

    case ADD_DATA:
      return {
        ...state,
        data: [...state.users],
      };

    case UPDATE_DATA:
      return {
        ...state,
        data: [...state.users],
      };

    case DELETE_DATA:
      return {
        ...state,
      };

    default:
      return state;
  }
};
