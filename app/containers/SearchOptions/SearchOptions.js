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
import { SEARCH_TYPE_ADVANCED } from './constants';
import './style.scss';

// Mock Source Options
const options = [
  { label: 'NBC', value: 'nbc' },
  { label: 'Al-Jazeera', value: 'al-jazeera' },
  { label: 'Zerohedge', value: 'zerohedge' },
  { label: 'BBC', value: 'bbc' }
];

export default class SearchOptions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const buildCountryOption = (country) => (
      <option
        key={country.name}
        value={country.code.toLowerCase()}
      >
        {country.name}
      </option>
    );
    if (this.props.advanced) {
      return (
        <section className="search-options">
          <div className="search-options__options">
            <label htmlFor="country" className="search-options__control">Country
              <select name="country" value={undefined}>
                <option value="all" defaultValue>All</option>
                { countryCodes.map((country) => buildCountryOption(country)) }
              </select>
            </label>
            <label htmlFor="category" className="search-options__control">Category
              <select name="category" value={undefined}>
                <option value="all" defaultValue>All</option>
                <option value="entertainment">Entertainment</option>
                <option value="general">General</option>
                <option value="health">Health</option>
                <option value="science">Science</option>
                <option value="sports">Sports</option>
                <option value="technology">Technology</option>
              </select>
            </label>
          </div>
          <StatefulMultiSelect options={options} />
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
  toggleSearchType: PropTypes.func
};
