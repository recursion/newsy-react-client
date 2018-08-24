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
  TOGGLE_HIDE_ADVANCED
} from './constants';

// The initial state of the App
const initialState = fromJS({
  advanced: false, // simple or advanced
  hideAdvanced: false, // use advanced search, but hide the form.
  target: 'everything', // everything or headlines
  useSources: true, // we can only use country/category OR sources - not both.
  country: false, // all or a selected country code
  category: false, // all or a selected category
  dateState: false, // date to start the search
  dateEnd: false // date to end the search
});


function searchOptionsReducer(state = initialState, action) {
  switch (action.type) {
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
