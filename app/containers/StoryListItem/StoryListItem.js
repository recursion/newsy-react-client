/**
 * StoryListItem
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import ListItem from 'components/ListItem';
// import { IssueIcon } from 'components/Icons';
import './style.scss';

export default class StoryListItem extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const { item } = this.props;
    let nameprefix = '';

    // get our time strings from the published date
    const d = new Date(item.publishedAt);
    const day = d.toLocaleDateString();
    const time = d.toLocaleTimeString();

    // setup placeholder images for those that dont exist or dont load.
    // TODO: Get a better placeholder image.
    const placeHolderImage = 'https://via.placeholder.com/160x160';
    const urlImage = (!item.urlToImage) ? placeHolderImage : item.urlToImage;

    // create the storylist item content
    const content = (
      <div className="story-list-item">
        <div className="story-list-item__imageContainer">
          <img 
            src={urlImage} 
            className="story-list-item__url-image" 
            onError={(e)=>{e.target.src=placeHolderImage}} 
          />
        </div>
        <div className="story-list-item__content">
          <a className="story-list-item__title" href={item.url}>{item.title}</a>
          <div className="story-list-item__meta">
            <span className="story-list-item__source">Source: {item.source.name}</span>
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
  item: PropTypes.object
};
