/*
 * SearchOptionsReducer
 *
 */
import { fromJS } from 'immutable';

import { CHANGE_USE_SOURCES, CHANGE_SEARCH_TYPE } from './constants';

// The initial state of the App
const initialState = fromJS({
  advanced: false, // simple or advanced
  searchTarget: false, // everything or headlines
  useSources: false, // we can only use country/category OR sources - not both.
  country: false, // all or a selected country code
  category: false, // all or a selected category
  sources: [], // list of selected sources, or all - empty = all
  dateState: false, // date to start the search
  dateEnd: false // date to end the search
});


function searchOptionsReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_TYPE:
      return state
        .set('advanced', !state.get('advanced'));
    case CHANGE_USE_SOURCES:
      return state
        .set('useSources', !state.get('useSources'));
    default:
      return state;
  }
}

export default searchOptionsReducer;
