import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import StoryListItem from 'containers/StoryListItem';
import './style';

const PaginationControl = (page, totalStories, onGetPage) => {
  // calculate how many pages are available
  // and build a widget for navigating them.
  const control = (str, p) => {
    return (
      <button onClick={() => onGetPage(p)}>{str}</button>
    )
  }
  const totalPages = totalStories / 20;
  return (
    <div className="centerText">
      {(page > 1) ? control('Previous', page - 1) : ''} 
      {page}
      {(page < totalPages) ? control('Next', page + 1) : ''} 
    </div>
  );
}
const StoryList = ({ loading, error, stories, page, totalStories, onGetPage }) => {
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
        {(totalStories > 0) ? 
          <p className="storyList-results">{totalStories} Results</p> :
          ''
        }
        <List items={stories} component={StoryListItem} />
        { (page === 0) ? '' : PaginationControl(page, totalStories, onGetPage)}
      </div>
    );
  }

  return null;
};

StoryList.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.any,
  stories: PropTypes.any,
  page: PropTypes.any,
  totalStories: PropTypes.any,
  onGetPage: PropTypes.func
};

export default StoryList;
