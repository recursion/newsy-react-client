import React from 'react';
import PropTypes from 'prop-types';


const SortByOptions = ({ sortBy, onChangeSortBy }) => (
  <div className="field sort-by-container">
    <label htmlFor="sortBy" className="label">Sort By</label>
    <div className="select">
      <select
        name="sortBy"
        value={sortBy}
        onChange={(e) => onChangeSortBy(e.target.value)}
      >
        <option value="publishedAt" defaultValue>Published Date</option>
        <option value="relevancy">Relevance</option>
        <option value="popularity">Popularity</option>
      </select>
    </div>
  </div>
);

SortByOptions.propTypes = {
  sortBy: PropTypes.string,
  onChangeSortBy: PropTypes.func
};

export default SortByOptions;
