/**
 * Searchpage selectors
 */

import { createSelector } from 'reselect';

const selectSearch = (state) => state.get('search');

const makeSelectQuery = () => createSelector(
  selectSearch,
  (searchState) => searchState.get('query')
);

const makeSelectGetPage = () => createSelector(
  selectSearch,
  (getPageState) => getPageState.getIn(['stories', 'getPage'])
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

const makeSelectLoaded = () => createSelector(
  selectSearch,
  (searchState) => searchState.get('loaded')
);

const makeSelectSearchType = () => createSelector(
  selectSearch,
  (searchState) => searchState.get('advanced')
);

export {
  selectSearch,
  makeSelectSearchType,
  makeSelectLoaded,
  makeSelectQuery,
  makeSelectStories,
  makeSelectLoading,
  makeSelectGetPage,
  makeSelectError
};
