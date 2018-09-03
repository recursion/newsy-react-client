import React from 'react';
import PropTypes from 'prop-types';

const SearchForm = ({ onSubmitForm, query, onChangeSearchTerms }) => (
  <form onSubmit={onSubmitForm}>
    <div className="field has-addons">
      <div className="control is-expanded">
        <input
          className="input has-text-centered is-radiusless"
          id="query"
          type="text"
          placeholder="Enter search terms or headlines here."
          value={query || ''}
          onChange={onChangeSearchTerms}
          autoComplete="off"
        />
      </div>
      <div className="control">
        <button className="button is-info is-radiusless" onClick={onSubmitForm}>Search</button>
      </div>
    </div>
  </form>

);
export default SearchForm;

SearchForm.propTypes = {
  onSubmitForm: PropTypes.func,
  query: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  onChangeSearchTerms: PropTypes.func
};
