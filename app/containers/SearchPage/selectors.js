/**
 * Searchpage selectors
 */

import { createSelector } from 'reselect';

const selectQuery = (state) => state.get('search');

const makeSelectQuery = () => createSelector(
  selectQuery,
  (searchState) => searchState.get('query')
);

const selectStories = (state) => state.get('stories');
const makeSelectStories = () => createSelector(
  selectStories,
  (storiesState) => storiesState
);

export {
  selectQuery,
  makeSelectQuery,
  selectStories,
  makeSelectStories
};
