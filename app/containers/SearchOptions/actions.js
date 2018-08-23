/*
 * SearchOption Actions
 *
 */

import { CHANGE_TARGET, CHANGE_COUNTRY, CHANGE_SEARCH_TYPE, CHANGE_USE_SOURCES } from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {string} searchType The new type of search type.
 *
 * @return {object}    An action object with a type of CHANGE_USERNAME
 */
export function changeSearchType() {
  return {
    type: CHANGE_SEARCH_TYPE,
  };
}

export function changeUseSources() {
  return {
    type: CHANGE_USE_SOURCES,
  };
}

export function changeCountry(country) {
  return {
    type: CHANGE_COUNTRY,
    country
  };
}
export function changeTarget(target) {
  return {
    type: CHANGE_TARGET,
    target
  };
}
