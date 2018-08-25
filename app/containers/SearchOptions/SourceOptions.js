import React from 'react';
import PropTypes from 'prop-types';
import StatefulMultiSelect from 'containers/SourceOptions';

const SourceOptions = ({ target, toggleUseSources }) => (
  <div className="field">
    {(target !== 'everything') ?
      <div className="field">
        <div className="has-text-danger is-size-7-mobile">Currently Searching By Source</div>
        <div className="control">
          <button
            className="button is-small"
            onClick={toggleUseSources}
          >
            Switch to Country and Category
          </button>
        </div>
      </div> :
      ''
    }
    <div className="control">
      <label className="label">Sources</label>
      <StatefulMultiSelect />
    </div>
  </div>
);

SourceOptions.propTypes = {
  target: PropTypes.string,
  toggleUseSources: PropTypes.func
};

export default SourceOptions;
