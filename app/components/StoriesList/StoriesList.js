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

  if (stories && stories.length !== 0) {
    // TODO: currently we are passing only the articles in
    // likely we want to pass the entire object instead
    // since we are using pretty much all of it at this point.

    // when stories is unpopulated it is an immutable object
    // so convert it to js first otherwise leave it.
    // TODO: this is a bit hackish and needs a better solution.
    if (stories.toJS) {
      stories = stories.toJS();
    }
    const calcResultsDisplayed = () => {
      if (page === 1) {
        return `${1} - ${stories.length}`;
      }
      const start = ((page - 1) * 20) + 1;
      return `${start}-${(start + stories.length) - 1}`;
    };
    return (
      <div className="storyList">
        {(totalStories > 0) ?
          <div className="storyList__results">
            Showing {calcResultsDisplayed()} of {totalStories} Results
          </div> : ''
        }
        {(totalStories > 0) ?
          <List items={stories} component={StoryListItem} /> :
          <div className="storyList__tips">
            <h5 className="centerText">Search Tips</h5>
            <ul>
              <li>Surround phrases with quotes (&quot;) for exact match.</li>
              <li>Prepend words or phrases that <em>must</em> appear with a + symbol. Eg: +bitcoin</li>
              <li>Prepend words that <em>must not</em> appear with a - symbol. Eg: -bitcoin</li>
              <li>Alternatively you can use the AND / OR / NOT keywords, and optionally group these with parenthesis. Eg: crypto AND (ethereum OR litecoin) NOT bitcoin.</li>
            </ul>
          </div>
        }
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
