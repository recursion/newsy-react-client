/*
 * SearchOptions
 *
 *  Renders the various search options available to search
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import TargetOptions from 'components/SearchOptions/TargetOptions';
import SourceOptions from 'components/SearchOptions/SourceOptions';
import LanguageOptions from 'components/SearchOptions/LanguageOptions';
import CountryAndCategory from 'components/SearchOptions/CountryAndCategory';
import DateOptions from 'components/SearchOptions/DateOptions';
import SortByOptions from 'components/SearchOptions/SortByOptions';

export default class SearchOptions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  propTypes = {
    useSources: PropTypes.bool,
    toggleUseSources: PropTypes.func,
    onChangeLanguage: PropTypes.func,
    language: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ]),
    country: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ]),
    category: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
    ]),
    sortBy: PropTypes.string,
    target: PropTypes.string,
    onChangeCountry: PropTypes.func,
    onChangeCategory: PropTypes.func,
    onChangeTarget: PropTypes.func,
    fromDate: PropTypes.string,
    toDate: PropTypes.string,
    onChangeSortBy: PropTypes.func,
    onChangeFromDate: PropTypes.func,
    onChangeToDate: PropTypes.func
  };
  render() {
    const {
      useSources,
      toggleUseSources,
      country,
      category,
      target,
      language,
      onChangeLanguage,
      onChangeCountry,
      onChangeCategory,
      onChangeTarget,
      fromDate,
      toDate,
      sortBy,
      onChangeSortBy,
      onChangeFromDate,
      onChangeToDate
    } = this.props;

    return (
      <section className="search-options__advanced">
        <div className="search-options">
          <TargetOptions
            target={target}
            onChangeTarget={onChangeTarget}
          />
          <SortByOptions
            sortBy={sortBy}
            onChangeSortBy={onChangeSortBy}
            target={target}
          />
          <DateOptions
            fromDate={fromDate}
            toDate={toDate}
            target={target}
            onChangeFromDate={onChangeFromDate}
            onChangeToDate={onChangeToDate}
          />
          <LanguageOptions
            language={language}
            target={target}
            onChangeLanguage={onChangeLanguage}
          />
          {(useSources) ?
            <SourceOptions
              target={target}
              toggleUseSources={toggleUseSources}
            /> :
            <CountryAndCategory
              target={target}
              country={country}
              onChangeCountry={onChangeCountry}
              category={category}
              onChangeCategory={onChangeCategory}
              toggleUseSources={toggleUseSources}
            />
          }
        </div>
      </section>
    );
  }
}

