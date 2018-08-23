/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { makeSelectQuery, makeSelectGetPage } from 'containers/SearchPage/selectors';
import { makeSelectCountry } from 'containers/SearchOptions/selectors';
import request from 'utils/request';

import { LOAD_HEADLINES, LOAD_STORIES, CHANGE_PAGE } from './constants';
import { resetSearch, storiesLoaded, storiesLoadingError, pageChangeLoaded } from './actions';


const requestURL = 'http://localhost:3000/v1';

/**
 * Get stories based on search query
 */
export function* getStories() {
  // Select username from store
  const query = yield select(makeSelectQuery());
  const withQuery = `${requestURL}/news/search?q=${query}`;
  const finalUrl = withQuery;

  try {
    if (query === '') {
      yield put(resetSearch());
    } else {
      // Call our request helper (see 'utils/request')
      const stories = yield call(request, finalUrl);
      yield put(storiesLoaded(stories));
    }
  } catch (err) {
    yield put(storiesLoadingError(err));
  }
}

/*
 * Get headlines
 */
export function* getHeadlines() {
  const country = yield select(makeSelectCountry());
  const url = `${requestURL}/news/headlines`;
  const withCountry = (country) ? `&country=${country}` : '';
  const finalUrl = url + withCountry;

  try {
    // Call our request helper (see 'utils/request')
    const stories = yield call(request, finalUrl);
    yield put(storiesLoaded(stories));
  } catch (err) {
    yield put(storiesLoadingError(err));
  }
}

/*
 * Get a specific page based on our current query
 */
export function* getPage() {
  // Select username from store
  const query = yield select(makeSelectQuery());
  const page = yield select(makeSelectGetPage());

  const urlWithQuery = `${requestURL}/news/search?q=${query}&page=${page}`;

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
  // Watches for async actions and calls the approriate handler when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([
    takeLatest(LOAD_STORIES, getStories),
    takeLatest(CHANGE_PAGE, getPage),
    takeLatest(LOAD_HEADLINES, getHeadlines)
  ]);
}
