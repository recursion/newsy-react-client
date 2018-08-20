import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import StoryListItem from 'containers/StoryListItem';

const Pagination = (page, totalStories) => {
  // calculate how many pages are available
  // and build a widget for navigating them.
  const totalPages = totalStories / 20;
  return (
    <div className="centerText">
      {(page > 1) ? '<<' : '1'} 
      {(totalPages > 1) ? page + 1 : ''} 
      {(totalPages > 1) ? page + 2 : ''} 
      {(totalPages > 1) ? page + 3 : ''} 
      {(page < totalPages) ? '>>' : ''} 
    </div>
  );

}
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

  if (stories && stories !== false) {
    // when stories is unpopulated it is an immutable object
    // so convert it to js first otherwise leave it.
    if (stories.toJS) {
      stories = stories.toJS();
    }
    return (
      <div>
        <List items={stories} component={StoryListItem} />
        { (page === 0) ? '' : Pagination(page, totalStories)}
      </div>
    );
  }

  return null;
};

StoryList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  stories: PropTypes.any,
  page: PropTypes.int,
  totalStories: PropTypes.int
};

export default StoryList;
