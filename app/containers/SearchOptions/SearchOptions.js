/*
 * SearchOptions
 *
 *  Renders the various search options available to search
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import {} from './constants';
import './style.scss';
import AdvancedSearchOptions from './AdvancedSearchOptions';

export default class SearchOptions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const advancedOptionProps = {
      toggleSearchType: this.props.toggleSearchType,
      useSources: this.props.useSources,
      toggleUseSources: this.props.toggleUseSources,
      country: this.props.country,
      target: this.props.target,
      onChangeCountry: this.props.onChangeCountry,
      onChangeTarget: this.props.onChangeTarget
    };

    if (this.props.advanced) {
      return <AdvancedSearchOptions {...advancedOptionProps} />;
    }
    return (
      <section className="search-options">
        <button
          onClick={() => this.props.toggleSearchType()}
          className="search-options__type"
        >
          Advanced Search Options
        </button>
      </section>
    );
  }
}

SearchOptions.propTypes = {
  advanced: PropTypes.bool,
  toggleSearchType: PropTypes.func,
  useSources: PropTypes.bool,
  toggleUseSources: PropTypes.func,
  country: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  target: PropTypes.string,
  onChangeCountry: PropTypes.func,
  onChangeTarget: PropTypes.func
};
