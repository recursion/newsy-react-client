import React from 'react';
import PropTypes from 'prop-types';
import TargetOptions from './TargetOptions';
import SourceOptions from './SourceOptions';
import SpecialOptions from './SpecialOptions';
import './style.scss';

export default class AdvancedOptions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section className="search-options__advanced">
        <div className="search-options__nav">
          <div className="field">
            <div className="control">
              <button
                className="button is-small is-primary is-inverted"
                onClick={this.props.toggleSearchType}
              >
                &lt;&lt; Switch to Simple Search
              </button>
              <button
                className="button is-pulled-right is-small is-primary is-inverted"
                onClick={this.props.toggleHideAdvanced}
              >
                Hide Advanced Options
              </button>
            </div>
          </div>
        </div>
        <div className="search-options">
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
        </div>
      </section>
    );
  }
}

AdvancedOptions.propTypes = {
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
