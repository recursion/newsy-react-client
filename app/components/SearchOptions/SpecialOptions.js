import React from 'react';
import PropTypes from 'prop-types';
import CountryOptions from './CountryOptions';
import CategoryOptions from './CategoryOptions';
import './style.scss';

const SpecialOptions = ({
  target,
  country,
  onChangeCountry,
  category,
  onChangeCategory,
  toggleUseSources
}) => (
  <div className="search-options__special">
    {(target !== 'everything') ?
      <div className="field">
        <div className="has-text-danger is-size-7-mobile">
          Searching By Country and Category
        </div>
        <div className="control">
          <button
            className="button is-small is-primary is-inverted"
            onClick={toggleUseSources}
          >
              Switch to Sources
          </button>
        </div>
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
