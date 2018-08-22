import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';


/* calculate the results being display
 *  i.e. 1-20 or 21-40
 *  @number page    - the current page
 *  @number stories - the total number of stories
 *   returns @string
 */
const calcResultsDisplayed = (page, numStories) => {
  if (page === 1) {
    return `${1} - ${numStories}`;
  }
  const start = ((page - 1) * 20) + 1;
  return `${start}-${(start + numStories) - 1}`;
};

const ResultsCounter = ({ page, numStories, totalStories }) => (
  <div className="results-counter">
    Showing {calcResultsDisplayed(page, numStories)} of {totalStories} Results
  </div>
);

ResultsCounter.propTypes = {
  page: PropTypes.number,
  numStories: PropTypes.number,
  totalStories: PropTypes.number
};

export default ResultsCounter;
