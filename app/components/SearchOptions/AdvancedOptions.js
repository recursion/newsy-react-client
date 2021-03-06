import React from 'react';
import PropTypes from 'prop-types';
import TargetOptions from './TargetOptions';
import SourceOptions from './SourceOptions';
import LanguageOptions from './LanguageOptions';
import CountryAndCategory from './CountryAndCategory';
import AdvancedOptionsNav from './AdvancedOptionsNav';
import './style.scss';

export default class AdvancedOptions extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const {
      toggleHideAdvanced,
      toggleSearchType,
    } = this.props;

    const AdvancedOptionsNavProps = {
      toggleHideAdvanced,
      toggleSearchType
    };

    return (
      <section className="search-options__advanced">
        <AdvancedOptionsNav {...AdvancedOptionsNavProps} />
        <div className="search-options">
          <TargetOptions
            target={this.props.target}
            onChangeTarget={this.props.onChangeTarget}
          />
          <LanguageOptions language={this.props.language} onChangeLanguage={this.props.onChangeLanguage} />
          {(this.props.useSources) ?
            <SourceOptions
              target={this.props.target}
              toggleUseSources={this.props.toggleUseSources}
            /> :
            <CountryAndCategory
              target={this.props.target}
              country={this.props.country}
              onChangeCountry={this.props.onChangeCountry}
              category={this.props.category}
              onChangeCategory={this.props.onChangeCategory}
              toggleUseSources={this.props.toggleUseSources}
            />
          }
        </div>
      </section>
    );
  }
}

AdvancedOptions.propTypes = {
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
  onChangeTarget: PropTypes.func
};
