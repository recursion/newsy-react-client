import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectQuery } from 'containers/SearchPage/selectors';
import StoryListItem from './StoryListItem';

export default connect(
  createStructuredSelector({
    query: makeSelectQuery()
  })
)(StoryListItem);
