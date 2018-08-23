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

const makeSelectSearchTarget = () => createSelector(
  selectSearchOptions,
  (searchState) => searchState.get('target')
);
export {
  selectSearchOptions,
  makeSelectSearchType,
  makeSelectUseSources,
  makeSelectSearchTarget,
  makeSelectCountry,
};
