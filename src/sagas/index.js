import { put, takeEvery, call, select } from "redux-saga/effects";
import { api } from "../api";
import {
  FETCH_JOBS,
  FETCH_JOBS_SUCCESS,
  FETCH_JOBS_ERROR,
} from "../actions/types";

export function* fetchJobs() {
  const state = yield select();
  const { search, city, category } = state.appReducer;

  try {
    const offers = yield call(api.fetchJobs, search, city, category);
    yield put({
      type: FETCH_JOBS_SUCCESS,
      payload: offers,
    });
  } catch (error) {
    yield put({
      type: FETCH_JOBS_ERROR,
    });
  }
}

export default function* rootSaga() {
  yield takeEvery(FETCH_JOBS, fetchJobs);
}
