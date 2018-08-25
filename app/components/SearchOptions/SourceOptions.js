import React from 'react';
import PropTypes from 'prop-types';
import SourcesSelector from 'containers/SourcesSelector';
import './style.scss';

const SourceOptions = ({ target, toggleUseSources }) => (
  <div className="search-options__special">
    {(target !== 'everything') ?
      <div className="field">
        <div className="has-text-danger is-size-7-mobile">
          Searching By Source
        </div>
        <div className="control">
          <button
            className="button is-small is-primary is-inverted"
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
      <SourcesSelector />
    </div>
  </div>
);

SourceOptions.propTypes = {
  target: PropTypes.string,
  toggleUseSources: PropTypes.func
};

export default SourceOptions;
