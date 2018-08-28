import React from 'react';
import PropTypes from 'prop-types';

const LanguageOptions = ({ language, onChangeLanguage }) => (
  <div className="field">
    <label className="label" htmlFor="language">Language</label>
    <div className="select">
      <select
        name="language"
        value={language || 'all'}
        onChange={(e) => onChangeLanguage(e.target.value)}
      >
        <option value="all" defaultValue>All</option>
        <option value="ar">Arabic</option>
        <option value="de">German</option>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="fr">French</option>
        <option value="he">Hebrew</option>
        <option value="it">Italian</option>
        <option value="nl">Dutch</option>
        <option value="no">Norwegian</option>
        <option value="pt">Portuguese</option>
        <option value="ru">Russian</option>
        <option value="se">Northern Sami</option>
        <option value="zh">Breton</option>
      </select>
    </div>
  </div>
);

LanguageOptions.propTypes = {
  language: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]),
  onChangeLanguage: PropTypes.func
};

export default LanguageOptions;
