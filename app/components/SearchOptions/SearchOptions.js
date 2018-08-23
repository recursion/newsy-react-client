/*
 * SearchOptions
 *
 *  Renders the various search options available to search
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import StatefulMultiSelect from './SourceOptions';

import './style.scss';

const options = [
  { label: 'NBC', value: 'nbc' },
  { label: 'BBC', value: 'bbc' }
];


export default class SearchOptions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <section className="search-options">
        <label htmlFor="country" className="search-options__control">Country:
          <select name="country" value={undefined}>
            <option value="all" defaultValue>All</option>
            <option value="us">U.S.</option>
            <option value="en">U.K.</option>
          </select>
        </label>
        <label htmlFor="category" className="search-options__control">Category:
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
        <StatefulMultiSelect options={options} />
      </section>
    );
  }
}
