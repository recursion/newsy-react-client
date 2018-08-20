import React from 'react';
import PropTypes from 'prop-types';

import './style';

const PaginationNavigator = ({page, totalStories, onGetPage}) => {
  // calculate how many pages are available
  // and build a widget for navigating them.
  const control = (str, pageNumber, selected) => {
    const buildClass = (selected) ? "pagination-nav__control selected" : "pagination-nav__control";
    return (
      // we likely want to change this to a link?
      // either way it should probably be its own component.
      // <button onClick={() => onGetPage(p)}>{str}</button>
      <button key={pageNumber} onClick={() => onGetPage(pageNumber)} className={buildClass}>
        {str}
      </button>
    )
  }
  const createLinks = (currentPage, totalPages) => {
    const result = [];
    if (totalPages < 10) {
      for (let i = 1; i < totalPages; i++) {
        const selected = (currentPage === i) ? true : false;
        result.push(control(i+'', i, selected));
      }
    } else if (totalPages >= 10 && currentPage < 6) {
      for (let i = 1; i < 11; i++) {
        const selected = (currentPage === i) ? true : false;
        result.push(control(i+'', i, selected));
      }
    } else {
      for (let i = currentPage - 5; i < currentPage + 5; i++) {
        const selected = (currentPage === i) ? true : false;
        result.push(control(i+'', i, selected));
      }
    }
    return result;
  }
  const totalPages = Math.round(totalStories / 20);
  return (
    <div className="pagination-nav centerText">
      {(page > 1) ? control('Previous', page - 1) : ''} 
      {/* 
            we need determine how many pages are available
            we will show up to 10 links for pages
            labeled by their page number
      */}
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