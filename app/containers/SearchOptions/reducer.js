/*
 * SearchOptionsReducer
 *
 */
import { fromJS } from 'immutable';

import {
  CHANGE_TARGET,
  CHANGE_COUNTRY,
  CHANGE_USE_SOURCES,
  CHANGE_SEARCH_TYPE,
  CHANGE_CATEGORY,
  CHANGE_LANGUAGE,
  TOGGLE_HIDE_ADVANCED,
  CHANGE_FROM_DATE,
  CHANGE_SORTBY,
  CHANGE_TO_DATE
} from './constants';

// get the current date and set it to a proper "yyyy-mm-dd" string
const now = new Date(Date.now()).toISOString().split('T')[0];

// regex for validating string is in 'yyyy-mm-dd' format
const dateValidator = /^(19|20)\d\d[- /.](0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])$/;

// The initial state of the App
const initialState = fromJS({
  advanced: false, // simple or advanced
  hideAdvanced: false, // use advanced search, but hide the form.
  target: 'everything', // everything or headlines
  useSources: true, // we can only use country/category OR sources - not both.
  country: false, // all or a selected country code
  language: false, // language code - or all by default
  category: false, // all or a selected category
  fromDate: '2012-01-01', // date to start the search
  toDate: now, // date to end the search
  sortBy: 'publishedAt'
});


function searchOptionsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SORTBY:
      return state
        .set('sortBy', action.sortBy);
    case CHANGE_TO_DATE:
      if (action.date.match(dateValidator)) {
        return state
          .set('toDate', action.date);
      }
      return state;
    case CHANGE_FROM_DATE:
      if (action.date.match(dateValidator)) {
        return state
          .set('fromDate', action.date);
      }
      return state;
    case CHANGE_LANGUAGE:
      return state
        .set('language', action.language);
    case TOGGLE_HIDE_ADVANCED:
      return state
        .set('hideAdvanced', !state.get('hideAdvanced'));
    case CHANGE_TARGET:
      if (action.target === 'everything') {
        return state
          .set('target', action.target)
          .set('useSources', true);
      }
      return state
        .set('target', action.target);
    case CHANGE_SEARCH_TYPE:
      return state
        .set('advanced', !state.get('advanced'));
    case CHANGE_USE_SOURCES:
      return state
        .set('useSources', !state.get('useSources'));
    case CHANGE_COUNTRY:
      return state
        .set('country', action.country);
    case CHANGE_CATEGORY:
      return state
        .set('category', action.category);
    default:
      return state;
  }
}

export default searchOptionsReducer;
