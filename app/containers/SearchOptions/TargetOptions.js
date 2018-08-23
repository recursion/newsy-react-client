import React from 'react';
import PropTypes from 'prop-types';

const TargetOption = ({ target, onChangeTarget }) => (
  <div className="field">
    <label className="label" htmlFor="target">Target:</label>
    <div className="select">
      <select name="target" value={target} onChange={(e) => onChangeTarget(e.target.value)}>
        <option value="everything" defaultValue>Everything</option>
        <option value="headlines">Breaking News</option>
      </select>
    </div>
  </div>
);

TargetOption.propTypes = {
  target: PropTypes.string,
  onChangeTarget: PropTypes.func
};

export default TargetOption;
