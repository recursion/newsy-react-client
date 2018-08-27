/*
 * SearchOptions
 *
 *  Renders the various search options available to search
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import PropTypes from 'prop-types';
import AdvancedOptionsHiddenNav from 'components/SearchOptions/AdvancedOptionsHiddenNav';
import TargetOptions from 'components/SearchOptions/TargetOptions';
import SourceOptions from 'components/SearchOptions/SourceOptions';
import LanguageOptions from 'components/SearchOptions/LanguageOptions';
import CountryAndCategory from 'components/SearchOptions/CountryAndCategory';
import AdvancedOptionsNav from 'components/SearchOptions/AdvancedOptionsNav';
import DateOptions from 'components/SearchOptions/DateOptions';

export default class SearchOptions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      advanced,
      hideAdvanced,
      toggleHideAdvanced,
      toggleSearchType,
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
      onChangeFromDate,
      onChangeToDate
    } = this.props;


    const AdvancedOptionsNavProps = {
      toggleHideAdvanced,
      toggleSearchType,
    };

    if (advanced) {
      if (!hideAdvanced) {
        return (
          <section className="search-options__advanced">
            <AdvancedOptionsNav {...AdvancedOptionsNavProps} />
            <div className="search-options">
              <TargetOptions
                target={target}
                onChangeTarget={onChangeTarget}
              />
              <DateOptions
                fromDate={fromDate}
                toDate={toDate}
                onChangeFromDate={onChangeFromDate}
                onChangeToDate={onChangeToDate}
              />
              {(target === 'everything') ?
                <LanguageOptions
                  language={language}
                  onChangeLanguage={onChangeLanguage}
                /> : ''
              }
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
      return (
        <AdvancedOptionsHiddenNav {...AdvancedOptionsNavProps} />
      );
    }
    return (
      <div className="field">
        <div className="control">
          <button
            className="button is-small is-primary is-inverted"
            onClick={toggleSearchType}
          >
              Advanced Options
          </button>
        </div>
      </div>
    );
  }
}

SearchOptions.propTypes = {
  advanced: PropTypes.bool,
  hideAdvanced: PropTypes.bool,
  toggleHideAdvanced: PropTypes.func,
  toggleSearchType: PropTypes.func,
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
  target: PropTypes.string,
  onChangeCountry: PropTypes.func,
  onChangeCategory: PropTypes.func,
  onChangeTarget: PropTypes.func,
  fromDate: PropTypes.string,
  toDate: PropTypes.string,
  onChangeFromDate: PropTypes.func,
  onChangeToDate: PropTypes.func
};
