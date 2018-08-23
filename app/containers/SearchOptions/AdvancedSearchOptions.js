/*
 * AdvancedSearchOptions
 *
 *  Renders the various search options available to search
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import TargetOptions from './TargetOptions';
import SourceOptions from './SourceOptions';
import SpecialOptions from './SpecialOptions';
import {} from './constants';
import './style.scss';


export default class AdvancedSearchOptions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section className="search-options">
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
        <button
          className="search-options__type"
          onClick={() => this.props.toggleSearchType()}
        >
            Return to Simple Search
        </button>
      </section>
    );
  }
}

AdvancedSearchOptions.propTypes = {
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
