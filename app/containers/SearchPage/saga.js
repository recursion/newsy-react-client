/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import { LOAD_STORIES } from './constants';
import { storiesLoaded, storiesLoadingError } from './actions';

import { makeSelectQuery } from 'containers/SearchPage/selectors';
import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getStories() {
  // Select username from store
  const searchTerm = yield select(makeSelectQuery());
  const requestURL = `http://localhost:3000/v1/search?q=${searchTerm}`;

  try {
    // Call our request helper (see 'utils/request')
    const stories = yield call(request, requestURL);
    yield put(storiesLoaded(stories, searchTerm));
  } catch (err) {
    yield put(storiesLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* stories () {
  // Watches for LOAD_STORIES actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_STORIES, getStories);
}
