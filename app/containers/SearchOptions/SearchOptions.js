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
import AdvancedOptions from './AdvancedOptions';

export default class SearchOptions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      toggleHideAdvanced,
      toggleSearchType,
      useSources,
      toggleUseSources,
      country,
      category,
      target,
      onChangeCountry,
      onChangeCategory,
      onChangeTarget
    } = this.props;

    const advancedOptionProps = {
      toggleHideAdvanced,
      toggleSearchType,
      useSources,
      toggleUseSources,
      country,
      category,
      target,
      onChangeCountry,
      onChangeCategory,
      onChangeTarget
    };

    if (this.props.advanced && !this.props.hideAdvanced) {
      return (
        <AdvancedOptions {...advancedOptionProps} />
      );
    }
    if (this.props.hideAdvanced) {
      return (
        <div className="field">
          <div className="control has-text-centered">
            <button
              className="button is-small is-primary is-inverted is-pulled-left"
              onClick={() => {
                this.props.toggleHideAdvanced();
                this.props.toggleSearchType();
              }}
            >
              &lt;&lt;Simple Search
            </button>
            <div className="button is-small is-danger is-inverted is-static">
              Using Advanced Settings
            </div>
            <button
              className="button is-small is-primary is-inverted is-pulled-right"
              onClick={this.props.toggleHideAdvanced}
            >
                Show Advanced
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
