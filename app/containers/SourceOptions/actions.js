/*
 * SourceOption Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  LOAD_SOURCES,
  LOAD_SOURCES_SUCCESS,
  LOAD_SOURCES_ERROR,
  CHANGE_SELECTED_SOURCES
} from './constants';

/**
 * Load the SOURCES , this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_SOURCES
 */
export function loadSources() {
  return {
    type: LOAD_SOURCES,
  };
}

/**
 * Dispatched when the SOURCES are loaded by the request saga
 *
 * @param  {array} sources The SOURCES data
 *
 * @return {object}      An action object with a type of LOAD_SOURCES passing the SOURCES
 */
export function sourcesLoaded(sources) {
  return {
    type: LOAD_SOURCES_SUCCESS,
    sources
  };
}

/**
 * Dispatched when loading the SOURCES fails
 *
 * @param  {object} error The error
 *
 * @return {object} An action object with a type of LOAD_SOURCES_ERROR passing the error
 */
export function sourcesLoadingError(error) {
  return {
    type: LOAD_SOURCES_ERROR,
    error,
  };
}

/**
 * Dispatched when the selection changes
 *
 * @param  {array} selected The error
 *
 * @return {object} An action object with a type of LOAD_SOURCES_ERROR passing the error
 */
export function changeSelection(selected) {
  return {
    type: CHANGE_SELECTED_SOURCES,
    selected
  };
}
