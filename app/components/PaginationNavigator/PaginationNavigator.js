import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const LinkControl = (str, pageNumber, selected, onGetPage) => {
  if (selected) {
    return (
      <span key={pageNumber} className="pagination-nav__control selected">
        {str}
      </span>
    );
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

// return an array of page navigation links
// based on how many pages, and what the current page is.
const createLinks = (currentPage, totalPages, onGetPage) => {
  const links = [];
  const addControl = (i) => {
    links.push(LinkControl(`${i}`, i, (currentPage === i), onGetPage));
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
  return links;
};

/* Creates navigation links for multiple story pages. */
const PaginationNavigator = ({ page, totalStories, onGetPage }) => {
  const totalPages = Math.round(totalStories / 20) + 1;
  return (
    <div className="pagination-nav centerText">
      {(page > 1) ? LinkControl('Previous', page - 1, onGetPage) : ''}
      {createLinks(page, totalPages, onGetPage, onGetPage)}
      {(page < totalPages) ? LinkControl('Next', page + 1, onGetPage) : ''}
    </div>
  );
};


PaginationNavigator.propTypes = {
  onGetPage: PropTypes.func,
  page: PropTypes.number,
  totalStories: PropTypes.number
};

export default PaginationNavigator;
