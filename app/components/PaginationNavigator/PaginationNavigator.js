import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

/* Creates navigation links for multiple story pages. */
const PaginationNavigator = ({ page, totalStories, onGetPage }) => {
  const control = (str, pageNumber, selected) => {
    if (selected) {
      return <span key={pageNumber} className="pagination-nav__control selected">{str}</span>;
    }
    return (
      <button
        key={pageNumber}
        onClick={() => onGetPage(pageNumber)}
        className="pagination-nav__control"
      >
        {str}
      </button>
    );
  };

  const createLinks = (currentPage, totalPages) => {
    const result = [];
    const addControl = (i) => {
      result.push(control(`${i}`, i, (currentPage === i)));
    };

    if (totalPages <= 1) {
      addControl(1);
    } else if (totalPages < 10) {
      for (let i = 1; i < totalPages; i += 1) {
        addControl(i);
      }
    } else if (totalPages >= 10 && currentPage < 6) {
      for (let i = 1; i < 11; i += 1) {
        addControl(i);
      }
    } else {
      for (let i = currentPage - 5; i < currentPage + 5; i += 1) {
        addControl(i);
      }
    }
    return result;
  };

  const totalPages = Math.round(totalStories / 20) + 1;
  return (
    <div className="pagination-nav centerText">
      {(page > 1) ? control('Previous', page - 1) : ''}
      {createLinks(page, totalPages)}
      {(page < totalPages) ? control('Next', page + 1) : ''}
    </div>
  );
};

PaginationNavigator.propTypes = {
  onGetPage: PropTypes.func,
  page: PropTypes.number,
  totalStories: PropTypes.number
};

export default PaginationNavigator;
