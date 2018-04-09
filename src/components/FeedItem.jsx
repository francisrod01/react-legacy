import React from 'react';
import PropTypes from 'prop-types';

const defaultProps = {
  feed: {
    link: '',
    description: '',
  },
};

const propTypes = {
  feed: PropTypes.shape({
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    description: PropTypes.string,
  }),
};

const FeedItem = props => (
  <div className="row marketing">
    <div className="col-lg-12">
      <a href={props.feed.link}>
        <h4>{props.feed.title}</h4>
      </a>
      <p>{props.feed.description}</p>
    </div>
  </div>
);

FeedItem.propTypes = propTypes;
FeedItem.defaultProps = defaultProps;

export default FeedItem;
