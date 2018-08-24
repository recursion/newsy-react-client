import React from 'react';
import PropTypes from 'prop-types';

const SmallCenteredButton = ({ text, clickHandler }) => (
  <div className="has-text-centered">
    <button
      className="button is-small"
      onClick={() => clickHandler()}
    >
      {text}
    </button>
  </div>
);

SmallCenteredButton.propTypes = {
  text: PropTypes.string,
  clickHandler: PropTypes.func
};

export default SmallCenteredButton;
