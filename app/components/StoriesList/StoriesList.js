import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import StoryListItem from 'containers/StoryListItem';

const StoryList = ({ loading, error, stories, page, totalStories }) => {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  // calculate how many pages are available
  // and build a widget for navigating them.
  const totalPages = totalStories / 20;
  const pages = () => (
    <div className="centerText">
      {(page > 1) ? '<<' : '1'} 
      {page + 1} 
      {page + 2} 
      {page + 3} 
      {(page < totalPages) ? '>>' : ''} 
    </div>
  );

  if (stories && stories !== false) {
    // when stories is unpopulated it is an immutable object
    // so convert it to js first otherwise leave it.
    if (stories.toJS) {
      stories = stories.toJS();
    }
    return (
      <div>
        <List items={stories} component={StoryListItem} />
        {pages()}
      </div>
    );
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
