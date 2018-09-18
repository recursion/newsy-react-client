import React from 'react';
import PropTypes from 'prop-types';

const AdvancedOptionsNav = ({ toggleSearchType, advanced, toggleShowAdvanced }) => (
  (advanced) &&
    <div className="field">
      <div className="control">
        <div className="advanced-notice notification is-warning is-static">
          Using Advanced Options
          <button
            className="show-options-btn button is-small is-info is-inverted"
            onClick={() => {
              toggleShowAdvanced();
            }}
          >
            Show
          </button>
        </div>
      </div>
      <div className="control">
        <button
          className="button is-small is-primary is-inverted"
          onClick={() => {
            toggleSearchType();
          }}
        >
          &lt;&lt; Use Simple Search
        </button>
      </div>
    </div>
);

AdvancedOptionsNav.propTypes = {
  advanced: PropTypes.bool,
  toggleSearchType: PropTypes.func,
  toggleShowAdvanced: PropTypes.func
};

export default AdvancedOptionsNav;
