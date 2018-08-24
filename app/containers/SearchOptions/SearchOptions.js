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
        <section className="">
          <div className="field">
            <div className="control">
              <button
                className="button is-small"
                onClick={this.props.toggleSearchType}
              >
                Use Simple Search
              </button>
            </div>
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
              category={this.props.category}
              onChangeCategory={this.props.onChangeCategory}
              toggleUseSources={this.props.toggleUseSources}
            />
          }
        </section>
      );
    }
    return (
      <div className="field">
        <div className="control">
          <button
            className="button is-small"
            onClick={this.props.toggleSearchType}
          >
              Advanced
          </button>
        </div>
      </div>
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
  category: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  target: PropTypes.string,
  onChangeCountry: PropTypes.func,
  onChangeCategory: PropTypes.func,
  onChangeTarget: PropTypes.func
};
