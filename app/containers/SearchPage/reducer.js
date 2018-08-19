/*
 * SearchReducer
 *
 */
import { fromJS } from 'immutable';

import { 
  CHANGE_SEARCHTERMS,
  LOAD_STORIES,
  LOAD_STORIES_SUCCESS,
  LOAD_STORIES_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  query: '',
  stories: []
});

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCHTERMS:
      return state.set('query', action.query);
    case LOAD_STORIES:
      return state;
    case LOAD_STORIES_SUCCESS:
      return state;
    case LOAD_STORIES_ERROR:
      return state;
    default:
      return state;
  }
}

export default searchReducer;
