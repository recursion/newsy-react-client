import React from 'react';
import PropTypes from 'prop-types';
import CountryOptions from './CountryOptions';
import CategoryOptions from './CategoryOptions';

const SpecialOptions = ({
  target,
  country,
  onChangeCountry,
  toggleUseSources
}) => (
  <div>
    {(target !== 'everything') ?
      <div className="search-options__options">
        <CountryOptions
          country={country}
          onChangeCountry={onChangeCountry}
        />
        <CategoryOptions />
      </div> :
      ''
    }
    {(target !== 'everything') ?
      <button
        className="search-options__type-selector"
        onClick={toggleUseSources}
      >
          Switch to Search by Sources
      </button> :
      ''
    }
  </div>
);

SpecialOptions.propTypes = {
  target: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  country: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  onChangeCountry: PropTypes.func,
  toggleUseSources: PropTypes.func
};

export default SpecialOptions;
