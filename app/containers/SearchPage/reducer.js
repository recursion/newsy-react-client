/*
 * SearchReducer
 *
 */
import { fromJS } from 'immutable';

import {
  RESET,
  CHANGE_QUERY,
  CHANGE_PAGE,
  CHANGE_PAGE_SUCCESS,
  LOAD_STORIES,
  LOAD_STORIES_SUCCESS,
  LOAD_STORIES_ERROR
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  query: false,
  loaded: false, // needed to track empty results
  stories: {
    articles: [],
    getPage: 1,
    page: 0,
    totalResults: 0
  }
});

function searchReducer(state = initialState, action) {
  switch (action.type) {
    case RESET:
      return initialState;
    case CHANGE_QUERY:
      return state.set('query', action.query);
    case CHANGE_PAGE:
      return state
        .setIn(['stories', 'getPage'], action.page)
        .set('loading', true);
    case CHANGE_PAGE_SUCCESS:
      return state
        .setIn(['stories', 'articles'], action.stories.articles)
        .setIn(['stories', 'page'], state.getIn(['stories', 'getPage']))
        .setIn(['stories', 'getPage'], 1)
        .set('loading', false);
    case LOAD_STORIES:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_STORIES_SUCCESS:
      return state
        .setIn(['stories', 'totalResults'], action.stories.totalResults)
        .setIn(['stories', 'articles'], action.stories.articles)
        .setIn(['stories', 'page'], (action.stories.totalResults > 0) ? 1 : 0)
        .set('loaded', true)
        .set('loading', false);
    case LOAD_STORIES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default searchReducer;
