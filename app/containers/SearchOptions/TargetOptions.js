import React from 'react';
import PropTypes from 'prop-types';

const TargetOption = ({ target, onChangeTarget }) => (
  <label htmlFor="target" className="search-options__control">Target:
    <select name="target" value={target} onChange={(e) => onChangeTarget(e.target.value)}>
      <option value="everything" defaultValue>Everything</option>
      <option value="headlines">Breaking News</option>
    </select>
  </label>
);

TargetOption.propTypes = {
  target: PropTypes.string,
  onChangeTarget: PropTypes.func
};

export default TargetOption;
