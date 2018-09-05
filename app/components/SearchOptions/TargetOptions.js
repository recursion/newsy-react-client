import React from 'react';
import PropTypes from 'prop-types';

const TargetOption = ({ target, onChangeTarget }) => (
  <div className="field">
    <label className="label">Search Target</label>
    <div className="control">
      <div className="radio">
        <label className="label has-text-weight-light" htmlFor="everything">
          <input
            type="radio"
            name="target"
            value="everything"
            checked={target === 'everything'}
            onChange={(e) => onChangeTarget(e.target.value)}
          />
          Everything
        </label>
        <label className="label has-text-weight-light" htmlFor="top-headlines">
          <input
            type="radio"
            name="target"
            value="top-headlines"
            checked={target === 'top-headlines'}
            onChange={(e) => onChangeTarget(e.target.value)}
          />
          Top-headlines
        </label>
      </div>
    </div>
  </div>
);

TargetOption.propTypes = {
  target: PropTypes.string,
  onChangeTarget: PropTypes.func
};

export default TargetOption;
