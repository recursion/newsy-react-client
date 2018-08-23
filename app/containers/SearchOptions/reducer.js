/*
 * SearchOptionsReducer
 *
 */
import { fromJS } from 'immutable';

import { SEARCH_TYPE_SIMPLE, CHANGE_SEARCH_TYPE } from './constants';

// The initial state of the App
const initialState = fromJS({
  searchType: SEARCH_TYPE_SIMPLE, // simple or advanced
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
        .set('searchType', action.searchType);
    default:
      return state;
  }
}

export default searchOptionsReducer;
