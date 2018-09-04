import React from 'react';
import PropTypes from 'prop-types';


const now = () => {
  const d = new Date(Date.now());
  return d.toISOString().split('T')[0];
};

const yesterday = () => {
  const d = new Date(Date.now());
  const y = new Date(d.setDate(d.getDate() - 1));
  return y.toISOString().split('T')[0];
};

const DateOptions = ({
  target, fromDate, toDate, onChangeFromDate, onChangeToDate
}) => {
  if (target === 'everything') {
    return (
      <div className="field date-options">
        <label htmlFor="fromDate" className="label">From Date</label>
        <div className="control">
          <input
            onChange={(e) => onChangeFromDate(e.target.value)}
            type="date"
            id="fromDate"
            name="fromDate"
            value={fromDate}
            min="2012-01-01"
            max={yesterday()}
            required
          />
        </div>
        <label htmlFor="toDate" className="label">To Date</label>
        <div className="control">
          <input
            type="date"
            id="toDate"
            name="toDate"
            value={toDate}
            min="2012-01-02"
            max={now()}
            onChange={(e) => onChangeToDate(e.target.value)}
            required
          />
        </div>
      </div>
    );
  }
  return '';
};


DateOptions.propTypes = {
  fromDate: PropTypes.string,
  toDate: PropTypes.string,
  target: PropTypes.string,
  onChangeFromDate: PropTypes.func,
  onChangeToDate: PropTypes.func
};

export default DateOptions;
