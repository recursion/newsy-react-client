/*
 * SearchOption Actions
 *
 */

import { CHANGE_SEARCH_TYPE } from './constants';

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
