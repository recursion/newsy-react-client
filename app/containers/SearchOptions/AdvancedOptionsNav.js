import React from 'react';
import PropTypes from 'prop-types';

export default class AdvancedOptionsNav extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="field">
        <div className="control has-text-centered">
          <button
            className="button is-small is-primary is-inverted is-pulled-left"
            onClick={() => {
              this.props.toggleHideAdvanced();
              this.props.toggleSearchType();
            }}
          >
            &lt;&lt;Simple Search
          </button>
          <div className="button is-small is-danger is-inverted is-static">
            Using Advanced Settings
          </div>
          <button
            className="button is-small is-primary is-inverted is-pulled-right"
            onClick={this.props.toggleHideAdvanced}
          >
              Show Advanced
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
