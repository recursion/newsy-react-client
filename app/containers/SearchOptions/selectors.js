/**
 * SearchOption selectors
 */

import { createSelector } from 'reselect';

const selectSearchOptions = (state) => state.get('searchOptions');

const makeSelectUseSources = () => createSelector(
  selectSearchOptions,
  (searchState) => searchState.get('useSources')
);

const makeSelectCountry = () => createSelector(
  selectSearchOptions,
  (searchState) => searchState.get('country')
);

const makeSelectLanguage = () => createSelector(
  selectSearchOptions,
  (searchState) => searchState.get('language')
);

const makeSelectCategory = () => createSelector(
  selectSearchOptions,
  (searchState) => searchState.get('category')
);

const makeSelectSources = () => createSelector(
  selectSearchOptions,
  (searchState) => searchState.get('sources')
);

const makeSelectSearchTarget = () => createSelector(
  selectSearchOptions,
  (searchState) => searchState.get('target')
);

const makeSelectFromDate = () => createSelector(
  selectSearchOptions,
  (searchState) => searchState.get('fromDate')
);

const makeSelectToDate = () => createSelector(
  selectSearchOptions,
  (searchState) => searchState.get('toDate')
);

const makeSelectSortBy = () => createSelector(
  selectSearchOptions,
  (searchState) => searchState.get('sortBy')
);

export {
  selectSearchOptions,
  makeSelectSortBy,
  makeSelectUseSources,
  makeSelectSearchTarget,
  makeSelectCountry,
  makeSelectSources,
  makeSelectCategory,
  makeSelectLanguage,
  makeSelectFromDate,
  makeSelectToDate,
};
