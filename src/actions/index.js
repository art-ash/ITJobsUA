import { SET_SEARCH, SET_SELECT_QUERY, FETCH_JOBS } from "./types";

export const fetchJobs = () => ({ type: FETCH_JOBS });

export const setSearch = (text) => {
  return {
    type: SET_SEARCH,
    payload: text,
  };
};

export const setSelectQuery = (name, value) => {
  return {
    type: SET_SELECT_QUERY,
    payload: { name, value },
  };
};
