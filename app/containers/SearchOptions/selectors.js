/**
 * SearchOption selectors
 */

import { createSelector } from 'reselect';

const selectSearchOptions = (state) => state.get('searchOptions');

const makeSelectSearchType = () => createSelector(
  selectSearchOptions,
  (searchState) => searchState.get('advanced')
);

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

const makeSelectAdvanced = () => createSelector(
  selectSearchOptions,
  (searchState) => searchState.get('advanced')
);

const makeSelectHideAdvanced = () => createSelector(
  selectSearchOptions,
  (searchState) => searchState.get('hideAdvanced')
);

const makeSelectFromDate = () => createSelector(
  selectSearchOptions,
  (searchState) => searchState.get('fromDate')
);

const makeSelectToDate = () => createSelector(
  selectSearchOptions,
  (searchState) => searchState.get('toDate')
);

export {
  selectSearchOptions,
  makeSelectAdvanced,
  makeSelectSearchType,
  makeSelectUseSources,
  makeSelectSearchTarget,
  makeSelectCountry,
  makeSelectSources,
  makeSelectCategory,
  makeSelectLanguage,
  makeSelectHideAdvanced,
  makeSelectFromDate,
  makeSelectToDate,
};
