import React from 'react';
import PropTypes from 'prop-types';
import CountryOptions from './CountryOptions';
import CategoryOptions from './CategoryOptions';

const SpecialOptions = ({
  target,
  country,
  onChangeCountry,
  category,
  onChangeCategory,
  toggleUseSources
}) => (
  <div>
    {(target !== 'everything') ?
      <div className="has-text-centered">
        <button
          className="button is-small is-primary"
          onClick={toggleUseSources}
        >
            Switch to Sources
        </button>
      </div> :
      ''
    }
    {(target !== 'everything') ?
      <div className="">
        <CountryOptions
          country={country}
          onChangeCountry={onChangeCountry}
        />
        <CategoryOptions
          category={category}
          onChangeCategory={onChangeCategory}
        />
      </div> :
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
  category: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  onChangeCategory: PropTypes.func,
  onChangeCountry: PropTypes.func,
  toggleUseSources: PropTypes.func
};

export default SpecialOptions;
