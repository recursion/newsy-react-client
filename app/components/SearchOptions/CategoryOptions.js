import React from 'react';
import PropTypes from 'prop-types';

const CategoryOptions = ({ category, onChangeCategory }) => (
  <div className="field">
    <label className="label" htmlFor="category">Category</label>
    <div className="select">
      <select
        name="category"
        value={category || 'all'}
        onChange={(e) => onChangeCategory(e.target.value)}
      >
        <option value="all" defaultValue>All</option>
        <option value="entertainment">Entertainment</option>
        <option value="general">General</option>
        <option value="health">Health</option>
        <option value="science">Science</option>
        <option value="sports">Sports</option>
        <option value="technology">Technology</option>
      </select>
    </div>
  </div>
);

CategoryOptions.propTypes = {
  category: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.string
  ]),
  onChangeCategory: PropTypes.func
};

export default CategoryOptions;
