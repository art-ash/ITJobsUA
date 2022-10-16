import {
  SET_SEARCH,
  SET_SELECT_QUERY,
  FETCH_JOBS,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
} from "../actions/types";

const initialState = {
  search: "",
  city: "",
  category: "",
  isFetching: false,
  isError: false,
  records: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH: {
      return {
        ...state,
        search: action.payload,
      };
    }

    case SET_SELECT_QUERY: {
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value,
      };
    }

    case FETCH_JOBS: {
      return {
        ...state,
        records: [],
        isFetching: true,
        isError: false,
      };
    }

    case FETCH_JOBS_SUCCESS: {
      return {
        ...state,
        isFetching: false,
        isError: false,
        records: action.payload,
      };
    }

    case FETCH_JOBS_ERROR: {
      return {
        ...state,
        isFetching: false,
        isError: true,
      };
    }

    default:
      return state;
  }
}
