import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import StoryListItem from 'containers/StoryListItem';
import PaginationNavigator from 'components/PaginationNavigator';

import './style.scss';

const StoryList = ({
  loading,
  error,
  stories,
  page,
  totalStories,
  onGetPage
}) => {
  const pageNavProps = {
    onGetPage,
    page,
    totalStories
  };

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
    // TODO: currently we are passing only the articles in
    // likely we want to pass the entire object instead
    // since we are using pretty much all of it at this point.

    // when stories is unpopulated it is an immutable object
    // so convert it to js first otherwise leave it.
    if (stories.toJS) {
      stories = stories.toJS();
    }
    return (
      <div className="storyList">
        {(totalStories > 0) ?
          <p className="storyList__results">{totalStories} Results</p> :
          ''
        }
        <List items={stories} component={StoryListItem} />
        { (page === 0) ? '' : <PaginationNavigator {...pageNavProps} />}
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
