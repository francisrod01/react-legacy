import React from 'react';
import PropTypes from 'prop-types';

import FeedItem from './FeedItem';

const defaultProps = {
  feeds: [],
};

const propTypes = {
  feeds: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      item: PropTypes.node,
    }),
  ),
};

const Feed = props => (
  <div>
    { props.feeds.map(item =>
      <FeedItem key={item.id} feed={item} />,
    )}
  </div>
);

Feed.propTypes = propTypes;
Feed.defaultProps = defaultProps;

export default Feed;
