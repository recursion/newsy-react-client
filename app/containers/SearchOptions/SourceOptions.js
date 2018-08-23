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
    <StatefulMultiSelect options={options} />
    {(target !== 'everything') ?
      <button
        className="search-options__type-selector"
        onClick={toggleUseSources}
      >
        Switch to Search by Country and Category
      </button> :
      ''
    }
  </div>
);

SourceOptions.propTypes = {
  target: PropTypes.string,
  toggleUseSources: PropTypes.func
};

export default SourceOptions;
