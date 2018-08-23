/**
 * SearchOption selectors
 */

import { createSelector } from 'reselect';

const selectSearchOptions = (state) => state.get('searchOptions');

const makeSelectSearchType = () => createSelector(
  selectSearchOptions,
  (searchState) => searchState.get('searchType')
);

export {
  selectSearchOptions,
  makeSelectSearchType,
};
