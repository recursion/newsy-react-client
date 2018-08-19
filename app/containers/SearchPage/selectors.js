/**
 * Searchpage selectors
 */

import { createSelector } from 'reselect';

const selectSearch = (state) => state.get('search');

const makeSelectQuery = () => createSelector(
  selectSearch,
  (searchState) => searchState.get('query')
);

const makeSelectStories = () => createSelector(
  selectSearch,
  (storiesState) => storiesState.get('stories')
);

const makeSelectLoading = () => createSelector(
  selectSearch,
  (searchState) => searchState.get('loading')
);

const makeSelectError = () => createSelector(
  selectSearch,
  (searchState) => searchState.get('error')
);

export {
  selectSearch,
  makeSelectQuery,
  makeSelectStories,
  makeSelectLoading,
  makeSelectError
};
