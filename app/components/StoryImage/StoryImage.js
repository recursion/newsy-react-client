/*
 * StoryImage
 *
 *  A component that renders if the image can be loaded
 *  or returns an empty container if there is no image
 *  or it errors on load.
 *
 *  Just use flux to manage it's own state here,
 *  since this will never be used/affected by any other component.
 */

import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

export default class StoryImage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = { errored: false };
    this.handleError = this.handleError.bind(this);
  }
  handleError() {
    this.setState({ errored: true });
  }
  render() {
    return (
      <div className="story-image__container">
        {(this.state.errored || !this.props.urlImage) ?
          <div className="story-image__filler"></div> :
          <img
            src={this.props.urlImage}
            className="story-image__image"
            onError={this.handleError}
            alt={`${this.props.item.url}`}
          />
        }
      </div>
    );
  }
}

StoryImage.propTypes = {
  urlImage: PropTypes.string,
  item: PropTypes.object
};
