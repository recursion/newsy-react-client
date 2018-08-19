import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import StoryListItem from 'containers/StoryListItem';

const StoryList = ({ loading, error, stories, query }) => {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (stories && stories !== false && stories.length !== 0) {
    return <List items={stories} component={StoryListItem} />;
  }

  return null;
};

StoryList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  stories: PropTypes.any,
  query: PropTypes.any
};

export default StoryList;
