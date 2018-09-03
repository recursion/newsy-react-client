/*
 * SearchPage
 *
 * Main page - display search and results.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import SearchForm from 'components/SearchForm';
import StoriesList from 'components/StoriesList';
import SearchOptions from 'containers/SearchOptions';
import ResultsCounter from 'components/ResultsCounter';

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

    const totalStories = stories.get('totalResults');

    const searchFromProps = {
      onSubmitForm,
      query,
      onChangeSearchTerms,
    };

    const storiesListProps = {
      loading,
      error,
      stories: stories.get('articles'),
      page: stories.get('page'),
      totalStories,
      onGetPage
    };

    const resultsCounterProps = {
      page: stories.get('page'),
      totalStories,
      loading,
      loaded,
      numStories: stories.get('articles').length
    };

    return (
      <article>
        <Helmet>
          <title>Newsy: Search</title>
          <meta name="description" content="An easy way to search multiple news outlets for similar stories." />
        </Helmet>
        <section className="search-page">
          <SearchForm {...searchFromProps} />
          <SearchOptions />
          <ResultsCounter {...resultsCounterProps} />
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
  onGetPage: PropTypes.func,
  query: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  onChangeSearchTerms: PropTypes.func,
};
