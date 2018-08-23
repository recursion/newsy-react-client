import React from 'react';
import PropTypes from 'prop-types';
import StatefulMultiSelect from 'containers/SourceOptions';

// Mock Source Options
const options = [
  { label: 'NBC', value: 'nbc' },
  { label: 'Al-Jazeera', value: 'al-jazeera' },
  { label: 'Zerohedge', value: 'zerohedge' },
  { label: 'BBC', value: 'bbc' }
];

const SourceOptions = ({ target, toggleUseSources }) => (
  <div>
    {(target !== 'everything') ?
      <div className="field has-text-centered">
        <button
          className="button is-small is-primary"
          onClick={toggleUseSources}
        >
          Search by Country and Category
        </button>
      </div> :
      ''
    }
    <StatefulMultiSelect options={options} />
  </div>
);

SourceOptions.propTypes = {
  target: PropTypes.string,
  toggleUseSources: PropTypes.func
};

export default SourceOptions;
