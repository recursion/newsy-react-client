import React from 'react';
import PropTypes from 'prop-types';


const AdvancedOptionsNav = ({ toggleSearchType, toggleHideAdvanced }) => (
  <div className="search-options__nav">
    <div className="field">
      <div className="control">
        <button
          className="button is-small is-primary is-inverted"
          onClick={toggleSearchType}
        >
          &lt;&lt; Back to Simple Search
        </button>
      </div>
      <div className="control">
        <button
          className="button is-small is-primary is-inverted"
          onClick={toggleHideAdvanced}
        >
          Hide Advanced Options
        </button>
      </div>
    </div>
  </div>
);

AdvancedOptionsNav.propTypes = {
  toggleHideAdvanced: PropTypes.func,
  toggleSearchType: PropTypes.func
};

export default AdvancedOptionsNav;
