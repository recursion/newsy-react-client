/*
 * SearchPage
 *
 * Main page - display search and results.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import OptionsPanel from 'containers/OptionsPanel';
import SearchForm from 'components/SearchForm';
import StoriesList from 'components/StoriesList';
import ResultsCounter from 'components/ResultsCounter';
import AdvancedOptionsNav from 'components/SearchOptions/AdvancedOptionsNav';

import './style.scss';

export default class SearchPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    advanced: PropTypes.bool,
    toggleSearchType: PropTypes.func,
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

  constructor(props) {
    super(props);
    this.state = { showAdvanced: false };
    this.toggleShowAdvanced = this.toggleShowAdvanced.bind(this);
    this.closeAdvanced = this.closeAdvanced.bind(this);
  }

  toggleShowAdvanced() {
    this.setState(() => ({
      showAdvanced: !this.state.showAdvanced
    }));
  }

  closeAdvanced() {
    this.setState(() => ({
      showAdvanced: false
    }));
  }

  render() {
    const {
      advanced,
      toggleSearchType,
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

    const advancedOptionsNavProps = {
      advanced,
      toggleSearchType,
      toggleShowAdvanced: this.toggleShowAdvanced
    };

    const panelProps = {
      advanced,
      toggleSearchType,
      toggleShowAdvanced: this.toggleShowAdvanced,
      showAdvanced: this.state.showAdvanced,
      closeAdvanced: this.closeAdvanced
    };

    return (
      <article>
        <Helmet>
          <title>Newsy: Search</title>
          <meta name="description" content="An easy way to search multiple news outlets for similar stories." />
        </Helmet>
        <section className="search-page">
          <SearchForm {...searchFromProps} />
          <OptionsPanel {...panelProps} />
          <AdvancedOptionsNav {...advancedOptionsNavProps} />
          {(error) ?
            <div className="container is-fluid has-text-centered">
              <div className="title">Something went wrong. Please try again.</div>
              <br />
            </div> :
            <div>
              <ResultsCounter {...resultsCounterProps} />
              <StoriesList {...storiesListProps} />
            </div>
          }
        </section>
      </article>
    );
  }
}

