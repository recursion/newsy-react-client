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
export {
  selectSearchOptions,
  makeSelectSearchType,
  makeSelectUseSources,
};
