/*
 * SearchOption Actions
 *
 */

import {
  CHANGE_TARGET,
  CHANGE_COUNTRY,
  CHANGE_CATEGORY,
  CHANGE_USE_SOURCES,
  CHANGE_LANGUAGE,
  CHANGE_FROM_DATE,
  CHANGE_SORTBY,
  CHANGE_TO_DATE
} from './constants';


export function changeFromDate(date) {
  return {
    type: CHANGE_FROM_DATE,
    date
  };
}

export function changeToDate(date) {
  return {
    type: CHANGE_TO_DATE,
    date
  };
}

export function changeSortBy(sortBy) {
  return {
    type: CHANGE_SORTBY,
    sortBy
  };
}

export function changeLanguage(language) {
  return {
    type: CHANGE_LANGUAGE,
    language
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
