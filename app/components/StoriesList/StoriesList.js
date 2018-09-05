import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import StoryListItem from 'containers/StoryListItem';
import PaginationNavigator from 'components/PaginationNavigator';

import './style.scss';


const StoryList = ({
  loading,
  stories,
  page,
  totalStories,
  onGetPage
}) => {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (stories.length !== 0) {
    // when stories is unpopulated it is an immutable object
    // so convert it to js first otherwise leave it.
    // TODO: this is a bit hackish and needs a better solution.
    // TODO: This probably needs to be converted to immutable (fromJS) in the reducer
    // but in the interest of not breaking anything else.... ill keep it for now.
    if (stories.toJS) {
      stories = stories.toJS();
    }

    const pageNavProps = {
      onGetPage,
      page,
      totalStories
    };


    return (
      <div className="storyList">
        <List items={stories} component={StoryListItem} />
        { (page === 0) ? '' : <PaginationNavigator {...pageNavProps} />}
      </div>
    );
  }

  return null;
};

StoryList.propTypes = {
  loading: PropTypes.bool,
  stories: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  page: PropTypes.any,
  totalStories: PropTypes.any,
  onGetPage: PropTypes.func
};

export default StoryList;
