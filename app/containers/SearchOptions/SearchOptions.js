/*
 * SearchOptions
 *
 *  Renders the various search options available to search
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import AdvancedOptions from 'components/SearchOptions/AdvancedOptions';
import AdvancedOptionsNav from 'components/SearchOptions/AdvancedOptionsNav';
import {} from './constants';
import './style.scss';

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

    const advancedOptionsNavProps = {
      toggleHideAdvanced,
      toggleSearchType,
    };

    if (this.props.advanced) {
      if (!this.props.hideAdvanced) {
        return (
          <AdvancedOptions {...advancedOptionProps} />
        );
      }
      return (
        <AdvancedOptionsNav {...advancedOptionsNavProps} />
      );
    }
    return (
      <div className="field">
        <div className="control">
          <button
            className="button is-small is-primary is-inverted"
            onClick={this.props.toggleSearchType}
          >
              Advanced Options
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
