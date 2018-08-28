/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest, all } from 'redux-saga/effects';
import request from 'utils/request';

import { LOAD_SOURCES } from './constants';
import { sourcesLoaded, sourcesLoadingError } from './actions';
import config from '../../config';


/**
 * Get stories based on search query
 */
export function* getSources() {
  // Select username from store
  const finalUrl = `${config.url}/news/sources`;

  try {
    // Call our request helper (see 'utils/request')
    const sources = yield call(request, finalUrl);
    yield put(sourcesLoaded(sources));
  } catch (err) {
    yield put(sourcesLoadingError(err));
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
    takeLatest(LOAD_SOURCES, getSources)
  ]);
}
