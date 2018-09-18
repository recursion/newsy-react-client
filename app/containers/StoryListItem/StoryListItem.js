/**
 * StoryListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import StoryImage from 'components/StoryImage';

// import { IssueIcon } from 'components/Icons';
import './style.scss';

export default class StoryListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  propTypes = {
    item: PropTypes.object
  };

  render() {
    const { item } = this.props;

    // get our time strings from the published date
    const d = new Date(item.publishedAt);
    const day = d.toLocaleDateString();
    const time = d.toLocaleTimeString();

    const imageProps = {
      urlImage: item.urlToImage,
      item
    };

    // create the storylist item content
    const content = (
      <div className="story-list-item box">
        <StoryImage {...imageProps} />
        <div className="story-list-item__content">
          <a className="story-list-item__title" href={item.url}>{item.title}</a>
          <div className="story-list-item__meta">
            <span className="story-list-item__source">Source: {item.source.name}</span>
            {(item.author) ?
              <span className="story-list-item__author">Authored By: {item.author}</span> :
              ''
            }
            <span className="story-list-item__date">Date: {day} at {time} </span>
          </div>
          <p className="story-list-item__description">{item.description}</p>
        </div>
      </div>
    );

    // Render the content into a list item
    return (
      <ListItem key={`story-list-item-${item.title}-${item.author}`} item={content} />
    );
  }
}

