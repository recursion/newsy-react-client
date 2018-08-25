/*
 * SearchOption Actions
 *
 */

import {
  CHANGE_TARGET,
  CHANGE_COUNTRY,
  CHANGE_SEARCH_TYPE,
  CHANGE_CATEGORY,
  CHANGE_USE_SOURCES,
  CHANGE_LANGUAGE,
  TOGGLE_HIDE_ADVANCED
} from './constants';

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
export function changeLanguage(language) {
  return {
    type: CHANGE_LANGUAGE,
    language
  };
}
export function toggleHideAdvanced() {
  return {
    type: TOGGLE_HIDE_ADVANCED
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

export function changeCategory(category) {
  return {
    type: CHANGE_CATEGORY,
    category
  };
}

export function changeTarget(target) {
  return {
    type: CHANGE_TARGET,
    target
  };
}
