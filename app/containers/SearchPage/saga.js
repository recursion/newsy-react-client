/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { LOAD_STORIES } from './constants';
import { storiesLoaded, storiesLoadingError } from './actions';

import { makeSelectQuery } from 'containers/SearchPage/selectors';
import request from 'utils/request';
const requestURL = `http://localhost:3000/v1`;

/**
 * Github repos request/response handler
 */
export function* getStories() {
  // Select username from store
  const query = yield select(makeSelectQuery());
  const urlWithQuery = requestURL + `/search?q=${query}`;

  try {
    // Call our request helper (see 'utils/request')
    const stories = yield call(request, urlWithQuery);
    yield put(storiesLoaded(stories));
  } catch (err) {
    yield put(storiesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* watchAll () {
  // Watches for LOAD_STORIES actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([takeLatest(LOAD_STORIES, getStories)]);
}
