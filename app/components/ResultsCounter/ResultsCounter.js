import React from 'react';
import PropTypes from 'prop-types';
import UsageTips from 'containers/UsageTips';

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

const ResultsCounter = ({
  loading,
  loaded,
  page,
  numStories,
  totalStories
}) => {
  if (loading) {
    return '';
  }

  if (totalStories > 0) {
    return (
      <div className="results-counter">
          Showing {calcResultsDisplayed(page, numStories)} of {totalStories} Results
      </div>
    );
  }

  if (loaded && totalStories === 0) {
    return (
      <div className="box has-text-centered">
        <div className="title">
            0 Results found.
        </div>
        <div className="subtitle">
            Try less specific search terms.
        </div>
      </div>
    );
  }

  return <UsageTips />;
};

ResultsCounter.propTypes = {
  page: PropTypes.number,
  numStories: PropTypes.number,
  totalStories: PropTypes.number,
  loading: PropTypes.bool,
  loaded: PropTypes.bool
};

export default ResultsCounter;
