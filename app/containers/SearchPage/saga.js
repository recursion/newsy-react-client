/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest, all } from 'redux-saga/effects';
import { makeSelectQuery, makeSelectGetPage } from 'containers/SearchPage/selectors';
import {
  makeSelectCountry,
  makeSelectAdvanced,
  makeSelectSearchTarget,
  makeSelectUseSources,
  makeSelectLanguage,
  makeSelectCategory,
  makeSelectToDate,
  makeSelectFromDate
} from 'containers/SearchOptions/selectors';
import {
  makeSelectSelected,
  makeSelectSources
} from 'containers/SourcesSelector/selectors';
import request from 'utils/request';

import { LOAD_STORIES, CHANGE_PAGE } from './constants';
import { resetSearch, storiesLoaded, storiesLoadingError, pageChangeLoaded } from './actions';


const requestURL = 'http://localhost:3000/v1/news/';

/**
 * Creates an sources=sources string from seleted sources
 * where sources is a comma seperated string
 * if All sources are selected, then an empty string is returned
 * since the api just assumes all sources if none are sent.
 *
 * It is possible for this to be called without the sources store
 * being preset. So - if we dont find the sources store, we just send
 * back an empty string.
 */
function* addSources() {
  const advancedSearch = yield select(makeSelectAdvanced());
  let selectedSources;
  let allSources;
  let withAdvancedOptions = '';
  try {
    selectedSources = yield select(makeSelectSelected());
    allSources = yield select(makeSelectSources());
    if (advancedSearch) {
      if (selectedSources.toJS().length !== allSources.length) {
        withAdvancedOptions = `sources=${selectedSources.toJS().join(',')}`;
      }
    }
    return withAdvancedOptions;
  } catch (err) {
    // Most likely because sources hasnt been loaded
    // TODO: More error handling here?
    return '';
  }
}

// Get country and return a query string
// or empty if no country is selected
export function* getCountry() {
  const country = yield select(makeSelectCountry());

  if (country) {
    return `country=${country}`;
  }
  return '';
}

// Get category and return a query string
// or empty if none is selected
export function* getCategory() {
  const category = yield select(makeSelectCategory());

  if (category) {
    return `category=${category}`;
  }
  return '';
}

// Get language and return a query string
// or empty if none is selected
export function* getLanguage() {
  const language = yield select(makeSelectLanguage());
  if (language) {
    return `language=${language}`;
  }
  return '';
}

export function* getToDate() {
  const toDate = yield select(makeSelectToDate());
  return `toDate=${toDate}`;
}

export function* getFromDate() {
  const fromDate = yield select(makeSelectFromDate());
  return `fromDate=${fromDate}`;
}

/**
 * build the appropriate query and make a request using it.
 */
export function* getStories() {
  const target = yield select(makeSelectSearchTarget());
  const query = yield select(makeSelectQuery());
  const useSources = yield select(makeSelectUseSources());
  const advanced = yield select(makeSelectAdvanced());
  const sources = yield addSources();
  const country = yield getCountry();
  const category = yield getCategory();
  const language = yield getLanguage();
  const nextPage = yield select(makeSelectGetPage());
  const fromDate = yield getFromDate();
  const toDate = yield getToDate();
  const page = (nextPage !== 1) ? `page=${nextPage}` : '';
  const q = (query) ? `q=${query}` : '';

  // determine if we are using sources
  // and return an array with either sources, or country and category
  const sourcesOrCountryAndCategory = () => {
    if (useSources) {
      return [sources];
    }
    return [country, category];
  };

  // returns true if the query is empty or false
  const queryEmpty = (query === false || query === '');

  // build our url + queryString
  // making sure we use ? for the first option
  // and & for the rest of the options
  const buildUrl = () => {
    const options = [...sourcesOrCountryAndCategory()];
    let url = `${requestURL}${target}`;
    let firstOptionUsed = false;

    // when adding an option to the string
    // make sure we are using the proper symbol (? or &)
    const addQueryToUrl = (option) => {
      if (!firstOptionUsed) {
        url += `?${option}`;
        firstOptionUsed = true;
      } else {
        url += `&${option}`;
      }
    };

    // add the query if there is one
    if (q !== '') {
      addQueryToUrl(q);
    }

    // add a page if one exists
    if (page !== '') {
      addQueryToUrl(page);
    }

    // add advanced options if they exist
    if (advanced) {
      options.forEach((option) => {
        if (option !== '') {
          addQueryToUrl(option);
        }
      });

      // use language option if it exists
      // and we are searching everything
      if (target !== 'top-headlines') {
        if (language !== '') {
          addQueryToUrl(language);
        }
        addQueryToUrl(fromDate);
        addQueryToUrl(toDate);
      }

      // make sure a country is attached if searching top-headlines without one.
      if (target === 'top-headlines' && country === '') {
        addQueryToUrl('country=us');
      }
    }
    // console.log('Built: ', url);
    return url;
  };

  try {
    if ((queryEmpty && advanced === false) || (queryEmpty && target === 'everything')) {
      yield put(resetSearch());
    } else {
      // Call our request helper (see 'utils/request')
      const stories = yield call(request, buildUrl());
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
