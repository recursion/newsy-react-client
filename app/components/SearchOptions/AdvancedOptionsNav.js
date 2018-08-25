import React from 'react';
import PropTypes from 'prop-types';

export default class AdvancedOptionsNav extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="field">
        <div className="control">
          <div className="button is-small is-danger is-inverted is-static">
            Using Advanced Options
          </div>
          <button
            className="button is-small is-primary is-inverted"
            onClick={this.props.toggleHideAdvanced}
          >
              Show
          </button>
        </div>
        <div className="control">
          <button
            className="button is-small is-primary is-inverted"
            onClick={() => {
              this.props.toggleHideAdvanced();
              this.props.toggleSearchType();
            }}
          >
            &lt;&lt; Use Simple Search
          </button>
        </div>

      </div>
    );
  }
}

AdvancedOptionsNav.propTypes = {
  toggleHideAdvanced: PropTypes.func,
  toggleSearchType: PropTypes.func,
};
