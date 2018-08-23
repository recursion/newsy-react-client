/*
 * SearchPage
 *
 * Main page - display search and results.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import StoriesList from 'components/StoriesList';
import SearchOptions from 'containers/SearchOptions';
import ResultsCounter from 'components/ResultsCounter';

import './style.scss';

export default class SearchPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    if (!this.props.query) {
      this.props.loadHeadlines();
    }
  }
  render() {
    const {
      loading,
      error,
      stories,
      onGetPage
    } = this.props;

    const storiesListProps = {
      loading,
      error,
      stories: stories.get('articles'),
      page: stories.get('page'),
      totalStories: stories.get('totalResults'),
      onGetPage
    };

    const resultsCounterProps = {
      page: stories.get('page'),
      totalStories: stories.get('totalResults'),
      numStories: stories.get('articles').length,
    };

    const resultsCounter = (resultsCounterProps.totalStories > 0) ?
      <ResultsCounter {...resultsCounterProps} /> :
      '';

    return (
      <article>
        <Helmet>
          <title>Newsy: Search</title>
          <meta name="description" content="An easy way to search multiple news outlets for similar stories." />
        </Helmet>
        <SearchOptions />
        <section className="search-page">
          <form onSubmit={this.props.onSubmitForm}>
            <label htmlFor="query">
              <input
                id="query"
                type="text"
                placeholder="Enter search terms or headlines here."
                value={this.props.query || ''}
                onChange={this.props.onChangeSearchTerms}
              />
            </label>
          </form>
          { (this.props.query === false) ?
            <h3 className="search-page__title">Top Stories</h3> :
            resultsCounter
          }
          <StoriesList {...storiesListProps} />
        </section>
      </article>
    );
  }
}

SearchPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  stories: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onSubmitForm: PropTypes.func,
  query: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  onChangeSearchTerms: PropTypes.func,
};
