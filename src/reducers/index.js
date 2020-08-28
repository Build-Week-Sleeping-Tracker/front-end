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
  isPosting: false,
  isPutting: false,
  isDeleting: false,
  Error: null,
  entries: [], // need an empty array so that the .map has somewhere to place its new array
  id: "",
  data: {
    sleep_start: null,
    sleep_end: null,
    user_id: "",
    moods: {
      before_sleep: "",
      after_sleep: "",
      daytime: "",
    },
  },
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    // axios.get = read
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        entries: action.payload,

        // state.sleep.filter((item) => {
        //   return item.id !== action.payload;
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    // axios.post = create
    case ADD_START:
      return {
        ...state,
        isPosting: true,
        error: null,
        data: action.payload,
      };
    case ADD_SUCCESS:
      return {
        ...state,
        isPosting: false,
        error: null,
        entries: action.payload,
      };
    case ADD_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: action.payload,
        entries: [],
      };

    // axios.put = update
    case UPDATE_START:
      return {
        ...state,
        isPutting: true,
        error: null,
        entries: [],
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        isPutting: false,
        error: null,
        entries: action.payload,
      };
    case UPDATE_FAILURE:
      return {
        ...state,
        isPutting: false,
        error: action.payload,
        entries: [],
      };

    // axios.delete = delete
    case DELETE_START:
      return {
        ...state,
        isDeleting: true,
        error: null,
        entries: [],
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        error: null,
        entries: state.entries.filter((item) => {
          return item.id !== action.payload;
        }),
      };
    case DELETE_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: action.payload,
        entries: [],
      };

    default:
      return state;
  }
};
