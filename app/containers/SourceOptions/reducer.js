/*
 * SearchOptionsReducer
 *
 */
import { fromJS } from 'immutable';

import {
  CHANGE_SELECTED_SOURCES,
  LOAD_SOURCES,
  LOAD_SOURCES_ERROR,
  LOAD_SOURCES_SUCCESS
} from './constants';

// The initial state of the App
const initialState = fromJS({
  sources: [],
  selected: []
});

const reMapSources = (source) => Object.assign({}, { value: source.id, label: source.name }, source);
const addId = (source) => source.id;

function sourcesReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SELECTED_SOURCES:
      return state
        .set('selected', fromJS(action.selected));
    case LOAD_SOURCES:
      return state
        .set('loading', true)
        .set('error', false);
    case LOAD_SOURCES_SUCCESS:
      return state
        .set('sources', action.sources.map(reMapSources))
        .set('selected', fromJS(action.sources.map(addId)))
        .set('loading', false);
    case LOAD_SOURCES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default sourcesReducer;
