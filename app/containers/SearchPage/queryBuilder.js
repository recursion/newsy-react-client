/**
 * queryBuilder
 *
 * Builds a url + query string using the users selected options and query
 */
import { select } from 'redux-saga/effects';
import { makeSelectQuery, makeSelectGetPage } from 'containers/SearchPage/selectors';
import {
  makeSelectCountry,
  makeSelectAdvanced,
  makeSelectSearchTarget,
  makeSelectUseSources,
  makeSelectLanguage,
  makeSelectCategory,
  makeSelectToDate,
  makeSelectSortBy,
  makeSelectFromDate
} from 'containers/SearchOptions/selectors';
import {
  makeSelectSelected,
  makeSelectSources
} from 'containers/SourcesSelector/selectors';
import config from '../../config';

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
    console.log('Using sources: ', withAdvancedOptions);
    return withAdvancedOptions;
  } catch (err) {
    // Most likely because sources hasnt been loaded
    // TODO: More error handling here?
    return '';
  }
}

// Get country and return a query string
// or empty if no country is selected
function* getCountry() {
  const country = yield select(makeSelectCountry());

  if (country) {
    return `country=${country}`;
  }
  return '';
}

// Get category and return a query string
// or empty if none is selected
function* getCategory() {
  const category = yield select(makeSelectCategory());

  if (category) {
    return `category=${category}`;
  }
  return '';
}

function* getSortBy() {
  const sortBy = yield select(makeSelectSortBy());
  return `sortBy=${sortBy}`;
}

// Get language and return a query string
// or empty if none is selected
function* getLanguage() {
  const language = yield select(makeSelectLanguage());
  if (language) {
    return `language=${language}`;
  }
  return '';
}

function* getToDate() {
  const toDate = yield select(makeSelectToDate());
  return `to=${toDate}`;
}

function* getFromDate() {
  const fromDate = yield select(makeSelectFromDate());
  return `from=${fromDate}`;
}

// determine if we are using sources
// and return an array with either sources, or country and category
const sourcesOrCountryAndCategory = ({
  sources, useSources, country, category
}) => {
  if (useSources) {
    return [sources];
  }
  return [country, category];
};

// build our url + queryString
// making sure we use ? for the first option
// and & for the rest of the options
export default function* buildQueryUrl() {
  const target = yield select(makeSelectSearchTarget());
  const query = yield select(makeSelectQuery());
  const advanced = yield select(makeSelectAdvanced());
  const nextPage = yield select(makeSelectGetPage());
  const useSources = yield select(makeSelectUseSources());
  const sources = yield addSources();
  const country = yield getCountry();
  const category = yield getCategory();
  const language = yield getLanguage();
  const fromDate = yield getFromDate();
  const toDate = yield getToDate();
  const sortBy = yield getSortBy();
  const page = (nextPage !== 1) ? `page=${nextPage}` : '';
  const q = (query) ? `q=${query}` : '';

  let url = `${config.url}/news/${target}`;
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

  // add a page string if we are getting a new page
  if (page !== '') {
    addQueryToUrl(page);
  }

  // add advanced options if they exist
  if (advanced) {
    const options = [...sourcesOrCountryAndCategory({
      sources, useSources, country, category
    })];
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
      addQueryToUrl(sortBy);
      addQueryToUrl(fromDate);
      addQueryToUrl(toDate);
    }

    // make sure a country is attached if searching top-headlines without one.
    if (target === 'top-headlines' && country === '' && (!useSources || sources === '')) {
      addQueryToUrl('country=us');
    }
  }
  // console.log('Built: ', url);
  return url;
}
