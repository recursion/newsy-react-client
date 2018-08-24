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
    if (this.props.advanced && !this.props.hideAdvanced) {
      return (
        <section className="">
          <div className="field">
            <div className="control">
              <button
                className="button is-small is-primary is-inverted"
                onClick={this.props.toggleSearchType}
              >
                &lt;&lt; Switch to Simple Search
              </button>
              <button
                className="button is-pulled-right is-small is-outlined"
                onClick={this.props.toggleHideAdvanced}
              >
                Hide Advanced Options
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
    if (this.props.hideAdvanced) {
      return (
        <div className="field">
          <div className="control">
            <div className="button is-small is-danger is-inverted is-static">
              Using Advanced Settings
            </div>
            <button
              className="button is-small is-primary is-inverted"
              onClick={this.props.toggleHideAdvanced}
            >
                Show
            </button>
            <button
              className="button is-pulled-right is-small is-primary is-inverted"
              onClick={() => {
                this.props.toggleHideAdvanced();
                this.props.toggleSearchType();
              }}
            >
              Switch To Simple Search
            </button>
          </div>
        </div>
      );
    }
    return (
      <div className="field">
        <div className="control">
          <button
            className="button is-small is-primary is-inverted"
            onClick={this.props.toggleSearchType}
          >
              Advanced Settings
          </button>
        </div>
      </div>
    );
  }
}

SearchOptions.propTypes = {
  advanced: PropTypes.bool,
  hideAdvanced: PropTypes.bool,
  toggleHideAdvanced: PropTypes.func,
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
