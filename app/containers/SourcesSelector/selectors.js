/**
 * SearchOption selectors
 */

import { createSelector } from 'reselect';

const selectSources = (state) => state.get('sources');

const makeSelectSources = () => createSelector(
  selectSources,
  (sourceState) => sourceState.get('sources')
);

const makeSelectSelected = () => createSelector(
  selectSources,
  (sourceState) => sourceState.get('selected')
);

const makeSelectLoading = () => createSelector(
  selectSources,
  (sourceState) => sourceState.get('loading')
);

export { makeSelectSources, selectSources, makeSelectLoading, makeSelectSelected };
