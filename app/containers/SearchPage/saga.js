/**
 * Searches for stories related to the search string and options
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { makeSelectQuery, makeSelectGetPage } from 'containers/SearchPage/selectors';
import {
  makeSelectAdvanced,
  makeSelectSearchTarget
} from 'containers/SearchOptions/selectors';
import request from 'utils/request';
import buildQueryUrl from './queryBuilder';

import { LOAD_STORIES, CHANGE_PAGE } from './constants';
import { resetSearch, storiesLoaded, storiesLoadingError, pageChangeLoaded } from './actions';

const isQueryEmpty = (query) => (query === false || query === '');

export function* getStories() {
  const target = yield select(makeSelectSearchTarget());
  const query = yield select(makeSelectQuery());
  const advanced = yield select(makeSelectAdvanced());
  const nextPage = yield select(makeSelectGetPage());

  try {
    if ((isQueryEmpty(query) && advanced === false) || (isQueryEmpty(query) && target === 'everything')) {
      yield put(resetSearch());
    } else {
      // build our query url
      const queryUrl = yield buildQueryUrl();
      // Call our request helper (see 'utils/request')
      const stories = yield call(request, queryUrl);
      if (nextPage > 1) {
        yield put(pageChangeLoaded(stories));
      } else {
        yield put(storiesLoaded(stories));
      }
    }
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
    takeLatest(CHANGE_PAGE, getStories),
  ]);
}
