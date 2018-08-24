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
import TargetOptions from './TargetOptions';
import SourceOptions from './SourceOptions';
import SpecialOptions from './SpecialOptions';

export default class SearchOptions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.advanced) {
      return (
        <section className="search-options">
          <div className="has-text-centered">
            <button
              className="button is-small"
              onClick={() => this.props.toggleSearchType()}
            >
                Return to Simple Search
            </button>
          </div>
          <TargetOptions
            target={this.props.target}
            onChangeTarget={this.props.onChangeTarget}
          />
          {(this.props.useSources) ?
            <SourceOptions
              target={this.props.target}
              toggleUseSources={this.props.toggleUseSources}
            /> :
            <SpecialOptions
              target={this.props.target}
              country={this.props.country}
              onChangeCountry={this.props.onChangeCountry}
              toggleUseSources={this.props.toggleUseSources}
            />
          }
        </section>
      );
    }
    return (
      <section className="search-options">
        <div className="has-text-centered">
          <button
            onClick={() => this.props.toggleSearchType()}
            className="button is-small"
          >
            Advanced Search Options
          </button>
        </div>
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
