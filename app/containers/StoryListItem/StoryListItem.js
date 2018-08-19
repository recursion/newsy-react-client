/**
 * StoryListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
import { IssueIcon } from 'components/Icons';
import './style.scss';

export default class StoryListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;
    let nameprefix = '';
    const d = new Date(item.publishedAt);
    const day = d.toLocaleDateString();
    const time = d.toLocaleTimeString();
    const content = (
      <div className="story-list-item">
        {/* we need to handle images that fail to load here 
            perhaps with something like this:

              function imgError(image) {
                image.onerror = "";
                image.src = "/images/noimage.gif";
                return true;
              }
              <img src="image.png" onerror="imgError(this);"/>
        */}
        <img src={item.urlToImage} className="story-list-item__url-image"/>
        <div className="story-list-item__content">
          <a className="story-list-item__title" href={item.url}>{item.title}</a>
          <span className="story-list-item__source">{item.source.name}</span>
          <div className="story-list-item__meta">
            <span className="story-list-item__author">Authored By: {item.author}</span>
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

StoryListItem.propTypes = {
  item: PropTypes.object,
  query: PropTypes.string,
};
