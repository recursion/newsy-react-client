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
  stories: {
    articles: [],
    page: 0,
    totalResults: 0
  }
});

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SEARCHTERMS:
      return state.set('query', action.query);
    case LOAD_STORIES:
      return state
              .set('loading', true)
              .setIn(['stories', 'page'], 1)
              .set('error', false);
    case LOAD_STORIES_SUCCESS:
      return state
              .setIn(['stories','totalResults'], action.stories.totalResults) 
              .setIn(['stories','articles'], action.stories.articles) 
              .set('loading', false);
    case LOAD_STORIES_ERROR:
      return state.set('error', true);
    default:
      return state;
  }
}

export default searchReducer;
