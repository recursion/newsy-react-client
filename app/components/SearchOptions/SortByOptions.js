import React from 'react';
import PropTypes from 'prop-types';


const SortByOptions = ({ sortBy, onChangeSortBy, target }) => {
  if (target === 'everything') {
    return (
      <div className="field sort-by-container">
        <label htmlFor="sortBy" className="label">Sort By</label>
        <div className="control">
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
      </div>
    );
  }
  return '';
};

SortByOptions.propTypes = {
  sortBy: PropTypes.string,
  target: PropTypes.string,
  onChangeSortBy: PropTypes.func
};

export default SortByOptions;
