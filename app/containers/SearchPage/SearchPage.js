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
import UsageTips from 'containers/UsageTips';

import './style.scss';

export default class SearchPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      loading,
      error,
      stories,
      loaded,
      onSubmitForm,
      query,
      onChangeSearchTerms,
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

    const totalStories = stories.get('totalResults');

    const resultsCounterProps = {
      page: stories.get('page'),
      totalStories,
      numStories: stories.get('articles').length,
    };

    const renderTipsOrNoResultsMsg = () => {
      if (loading) {
        return '';
      } else if (loaded && totalStories === 0) {
        return (
          <div className="has-text-centered">
            <div className="title">
              0 Results found.
            </div>
            <div className="subtitle">
              Try less specific search terms.
            </div>
          </div>
        );
      }
      return <UsageTips />;
    };

    /**
     *  resultsCounter
     *
     *  renders the resultsCounter if there are results
     *  or displays UsageTips, or a message stating no results found
     */
    const resultsCounter = (totalStories > 0) ?
      <ResultsCounter {...resultsCounterProps} /> :
      renderTipsOrNoResultsMsg();

    return (
      <article>
        <Helmet>
          <title>Newsy: Search</title>
          <meta name="description" content="An easy way to search multiple news outlets for similar stories." />
        </Helmet>
        <section className="search-page">
          <form onSubmit={onSubmitForm}>
            <div className="field has-addons">
              <div className="control is-expanded">
                <input
                  className="input has-text-centered"
                  id="query"
                  type="text"
                  placeholder="Enter search terms or headlines here."
                  value={query || ''}
                  onChange={onChangeSearchTerms}
                  autoComplete="off"
                />
              </div>
              <div className="control">
                <button className="button is-info" onClick={onSubmitForm}>Search</button>
              </div>
            </div>
          </form>
          <SearchOptions />
          { resultsCounter }
          <StoriesList {...storiesListProps} />
        </section>
      </article>
    );
  }
}

SearchPage.propTypes = {
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
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
