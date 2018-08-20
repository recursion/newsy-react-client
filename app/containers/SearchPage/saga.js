/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { makeSelectQuery, makeSelectGetPage } from 'containers/SearchPage/selectors';
import request from 'utils/request';

import { LOAD_STORIES, CHANGE_PAGE } from './constants';
import { resetSearch, storiesLoaded, storiesLoadingError, pageChangeLoaded } from './actions';


const requestURL = 'http://localhost:3000/v1';

/**
 * Github repos request/response handler
 */
export function* getStories() {
  // Select username from store
  const query = yield select(makeSelectQuery());
  const urlWithQuery = `${requestURL}/search?q=${query}`;

  try {
    if (query === '') {
      yield put(resetSearch());
    } else {
      // Call our request helper (see 'utils/request')
      const stories = yield call(request, urlWithQuery);
      yield put(storiesLoaded(stories));
    }
  } catch (err) {
    yield put(storiesLoadingError(err));
  }
}

export function* getPage() {
  // Select username from store
  const query = yield select(makeSelectQuery());
  const page = yield select(makeSelectGetPage());

  const urlWithQuery = `${requestURL}/search?q=${query}&page=${page}`;

  try {
    // Call our request helper (see 'utils/request')
    const stories = yield call(request, urlWithQuery);
    yield put(pageChangeLoaded(stories));
  } catch (err) {
    yield put(storiesLoadingError(err));
  }
}
/**
 * Root saga manages watcher lifecycle
 */
export default function* watchAll() {
  // Watches for LOAD_STORIES actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([
    takeLatest(LOAD_STORIES, getStories),
    takeLatest(CHANGE_PAGE, getPage),
  ]);
}
