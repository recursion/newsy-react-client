import React from 'react';
import PropTypes from 'prop-types';


let now = new Date(Date.now());
let yesterday = now.setDate(now.getDate() - 1);
[yesterday] = now.toISOString().split('T');
[now] = now.toISOString().split('T');

const DateOptions = ({
  fromDate, toDate, onChangeFromDate, onChangeToDate
}) => (
  <div className="date-options">
    <div className="field">
      <label htmlFor="fromDate" className="label">From Date</label>
      <div className="control">
        <input
          onChange={(e) => onChangeFromDate(e.target.value)}
          type="date"
          id="fromDate"
          name="fromDate"
          value={fromDate}
          min="2012-01-02"
          max={yesterday}
        />
      </div>
    </div>
    <div className="field">
      <label htmlFor="toDate" className="label">To Date</label>
      <div className="control">
        <input
          type="date"
          id="toDate"
          name="toDate"
          value={toDate}
          min="2012-01-02"
          max={now}
          onChange={(e) => onChangeToDate(e.target.value)}
        />
      </div>
    </div>
  </div>
);


DateOptions.propTypes = {
  fromDate: PropTypes.string,
  toDate: PropTypes.string,
  onChangeFromDate: PropTypes.func,
  onChangeToDate: PropTypes.func
};

export default DateOptions;
