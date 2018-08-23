/*
 * SearchOptions
 *
 *  Renders the various search options available to search
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import StatefulMultiSelect from 'containers/SourceOptions';
import PropTypes from 'prop-types';
import { countryCodes } from './countryCodes';
import {} from './constants';
import './style.scss';

// Mock Source Options
const options = [
  { label: 'NBC', value: 'nbc' },
  { label: 'Al-Jazeera', value: 'al-jazeera' },
  { label: 'Zerohedge', value: 'zerohedge' },
  { label: 'BBC', value: 'bbc' }
];

const buildCountryOption = (country) => (
  <option
    key={country.name}
    value={country.code.toLowerCase()}
  >
    {country.name}
  </option>
);


const renderOptions = ({ country, onChangeCountry }) => (
  <div className="search-options__options">
    { console.log('-->', country)}
    <label htmlFor="country" className="search-options__control">Country
      <select
        name="country"
        value={country || 'all'}
        onChange={(e) => onChangeCountry(e.target.value)}
      >
        <option value="all" selected>All</option>
        { countryCodes.map((c) => buildCountryOption(c)) }
      </select>
    </label>
    <label htmlFor="category" className="search-options__control">Category
      <select name="category" value={undefined}>
        <option value="all" selected>All</option>
        <option value="entertainment">Entertainment</option>
        <option value="general">General</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
    </label>
  </div>
);
const renderTargetOption = (target, onChangeTarget) => (
  <label htmlFor="target" className="search-options__control">Target:
    <select name="target" value={target} onChange={(e) => onChangeTarget(e.target.value)}>
      <option value="everything" selected>Everything</option>
      <option value="headlines">Breaking News</option>
    </select>
  </label>
);

export default class SearchOptions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    if (this.props.advanced) {
      return (
        <section className="search-options">
          {renderTargetOption(this.props.target, this.props.onChangeTarget)}
          {(this.props.useSources) ?
            <div>
              <StatefulMultiSelect options={options} />
              {(this.props.target !== 'everything') ?
                <button
                  className="search-options__type-selector"
                  onClick={this.props.toggleUseSources}
                >
                  Switch to Search by Country and Category
                </button> :
                ''
              }
            </div> :
            <div>
              {(this.props.target !== 'everything') ?
                renderOptions({
                  country: this.props.country,
                  onChangeCountry: this.props.onChangeCountry
                }) :
                ''
              }
              {(this.props.target !== 'everything') ?
                <button
                  className="search-options__type-selector"
                  onClick={this.props.toggleUseSources}
                >
                    Switch to Search by Sources
                </button> :
                ''
              }
            </div>

          }
          <button className="search-options__type" onClick={() => this.props.toggleSearchType()}>Return to Simple Search</button>
        </section>
      );
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
  country: PropTypes.string,
  target: PropTypes.bool,
  onChangeCountry: PropTypes.func,
  onChangeTarget: PropTypes.func
};
