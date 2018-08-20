import React from 'react';
import PropTypes from 'prop-types';

import './style';

const PaginationNavigator = ({page, totalStories, onGetPage}) => {
  const control = (str, pageNumber, selected) => {
    if (selected) {
      return <span className="pagination-nav__control selected">{str}</span>
    } else {
      return (
        <button 
          key={pageNumber} 
          onClick={() => onGetPage(pageNumber)} 
          className="pagination-nav__control"
        >
          {str}
        </button>
      )
    }
  }
  const createLinks = (currentPage, totalPages) => {
    const result = [];
    const addControl = (i) => {
      result.push(control(i+'', i, (currentPage === i)));
    }
    if (totalPages <= 1) {
      addControl(1);
    }
    if (totalPages < 10) {
      for (let i = 1; i < totalPages; i++) {
        addControl(i);
      }
    } else if (totalPages >= 10 && currentPage < 6) {
      for (let i = 1; i < 11; i++) {
        addControl(i);
      }
    } else {
      for (let i = currentPage - 5; i < currentPage + 5; i++) {
        addControl(i);
      }
    }
    return result;
  }

  const totalPages = Math.round(totalStories / 20) + 1;
  return (
    <div className="pagination-nav centerText">
      {(page > 1) ? control('Previous', page - 1) : ''} 
      {createLinks(page, totalPages)}
      {(page < totalPages) ? control('Next', page + 1) : ''} 
    </div>
  );
}

PaginationNavigator.Props = {
    onGetPage: PropTypes.func,
    page: PropTypes.int,
    totalPages: PropTypes.int
}
export default PaginationNavigator;