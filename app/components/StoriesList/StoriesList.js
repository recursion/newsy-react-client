import React from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';
import ListItem from 'components/ListItem';
import LoadingIndicator from 'components/LoadingIndicator';
import StoryListItem from 'containers/StoryListItem';
import PaginationNavigator from 'components/PaginationNavigator';
import ResultsCounter from 'components/ResultsCounter';

import './style.scss';


const StoryList = ({
  loading,
  error,
  stories,
  page,
  totalStories,
  onGetPage
}) => {
  if (loading) {
    return <List component={LoadingIndicator} />;
  }

  if (error !== false) {
    const ErrorComponent = () => (
      <ListItem item={'Something went wrong, please try again!'} />
    );
    return <List component={ErrorComponent} />;
  }

  if (stories.length !== 0) {
    // when stories is unpopulated it is an immutable object
    // so convert it to js first otherwise leave it.
    // TODO: this is a bit hackish and needs a better solution.
    if (stories.toJS) {
      stories = stories.toJS();
    }

    const pageNavProps = {
      onGetPage,
      page,
      totalStories
    };

    const resultsCounterProps = {
      page,
      numStories: stories.length,
      totalStories
    };

    return (
      <div className="storyList">
        {(totalStories > 0) ? <ResultsCounter {...resultsCounterProps} /> : ''}
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
  stories: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  page: PropTypes.any,
  totalStories: PropTypes.any,
  onGetPage: PropTypes.func
};

export default StoryList;
