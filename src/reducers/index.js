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

  // data: {
  //   sleep_start: null,
  //   sleep_end: null,
  //   user_id: "",
  //   moods: {
  //     before_sleep: "",
  //     after_sleep: "",
  //     daytime: "",
  //   },
  // },

  data: [],
  // id: null,
  // data: { id: null },
};

export const Reducer = (state = initialState, actions) => {
  switch (actions.type) {
    // axios.get = read
    case FETCH_START:
      return {
        ...state,
        isFetching: true,
        error: null,
        data: [],
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        data: actions.payload,
      };
    case FETCH_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: actions.payload,
        data: [],
        id: null,
      };

    // axios.post = create
    case ADD_START:
      return {
        ...state,
        isPosting: true,
        error: null,
        data: [],
      };
    case ADD_SUCCESS:
      return {
        ...state,
        isPosting: false,
        error: null,
        data: actions.payload,
      };
    case ADD_FAILURE:
      return {
        ...state,
        isPosting: false,
        error: actions.payload,
        data: [],
      };

    // axios.put = update
    case UPDATE_START:
      return {
        ...state,
        isPutting: true,
        error: null,
        data: [],
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        isPutting: false,
        error: null,
        data: actions.payload,
      };
    case UPDATE_FAILURE:
      return {
        ...state,
        isPutting: false,
        error: actions.payload,
        data: [],
      };

    // axios.delete = delete
    case DELETE_START:
      return {
        ...state,
        isDeleting: true,
        error: null,
        data: [],
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        isDeleting: false,
        error: null,
        // data: state.data.filter((entry) => {
        //   return entry.id !== actions.payload;
        // }),
        data: actions.payload,
      };
    case DELETE_FAILURE:
      return {
        ...state,
        isDeleting: false,
        error: actions.payload,
        data: [],
      };

    default:
      return state;
  }
};
