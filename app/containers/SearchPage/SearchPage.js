/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import './style.scss';

export default class SearchPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    if (this.props.query && this.props.query.trim().length > 0) {
      this.props.onSubmitForm();
    }
  }

  render() {
    const { loading, error, stories, query} = this.props;
    const searchListProps = {
      loading,
      error,
      stories,
      query
    };

    return (
      <article>
        <Helmet>
          <title>Search Page</title>
          <meta name="description" content="An easy way to search multiple news outlets for similar stories." />
        </Helmet>
        <div className="search-page">
          <section className="centered">
            <h2>Search for news stories!</h2>
          </section>
          <section>
            <h2>Search!</h2>
            <form onSubmit={this.props.onSubmitForm}>
              <label htmlFor="searchNews">
                <input
                  id="searchNews"
                  type="text"
                  placeholder="Enter search terms or headlines here."
                  value={this.props.query}
                  onChange={this.props.onChangeSearchTerms}
                />
              </label>
            </form>
            <div><p>Show results here!</p></div>
          </section>
        </div>
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
  query: PropTypes.string,
  onChangeSearchTerms: PropTypes.func,
};
