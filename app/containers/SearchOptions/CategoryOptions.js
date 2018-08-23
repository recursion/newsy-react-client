import React from 'react';
// import PropTypes from 'prop-types';

const CategoryOptions = () => (
  <label htmlFor="category" className="search-options__control">Category
    <select name="category" value={undefined}>
      <option value="all" defaultValue>All</option>
      <option value="entertainment">Entertainment</option>
      <option value="general">General</option>
      <option value="health">Health</option>
      <option value="science">Science</option>
      <option value="sports">Sports</option>
      <option value="technology">Technology</option>
    </select>
  </label>
);

export default CategoryOptions;
