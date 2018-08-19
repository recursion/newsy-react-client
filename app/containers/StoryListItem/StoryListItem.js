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

    // Put together the content of the repository
    const content = (
      <div>{item.title}</div>
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
