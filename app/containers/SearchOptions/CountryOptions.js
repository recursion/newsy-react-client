import React from 'react';
import PropTypes from 'prop-types';
import { countryCodes } from './countryCodes';

const buildCountryOption = (country) => (
  <option
    key={country.name}
    value={country.code.toLowerCase()}
  >
    {country.name}
  </option>
);

const CountryOptions = ({ country, onChangeCountry }) => (
  <div className="field">
    <label className="label" htmlFor="country">Country:</label>
    <div className="select">
      <select
        name="country"
        value={country || 'all'}
        onChange={(e) => onChangeCountry(e.target.value)}
      >
        <option value="all" defaultValue>All</option>
        { countryCodes.map((c) => buildCountryOption(c)) }
      </select>
    </div>
  </div>
);

CountryOptions.propTypes = {
  country: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  onChangeCountry: PropTypes.func
};

export default CountryOptions;
