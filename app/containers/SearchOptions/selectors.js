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
export {
  selectSearchOptions,
  makeSelectAdvanced,
  makeSelectSearchType,
  makeSelectUseSources,
  makeSelectSearchTarget,
  makeSelectCountry,
  makeSelectSources,
  makeSelectCategory,
  makeSelectHideAdvanced,
};
