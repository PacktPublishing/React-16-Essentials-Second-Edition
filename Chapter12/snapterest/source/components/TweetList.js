import React, { Component } from 'react';
import { connect } from 'react-redux';

import Tweet from './Tweet';
import { removeTweetFromCollection } from '../actions';

const listStyle = {
  padding: '0'
};

const listItemStyle = {
  display: 'inline-block',
  listStyle: 'none'
};

class TweetList extends Component {
  getListOfTweetIds = () =>
    Object.keys(this.props.tweets);

  getTweetElement = (tweetId) => {
    const {
      tweets,
      onRemoveTweetFromCollection
    } = this.props;
    const tweet = tweets[tweetId];

    return (
      <li style={listItemStyle} key={tweet.id}>
        <Tweet
          tweet={tweet}
          onImageClick={onRemoveTweetFromCollection}
        />
      </li>
    );
  }

  render() {
    const tweetElements = this
      .getListOfTweetIds()
      .map(this.getTweetElement);

    return (
      <ul style={listStyle}>
        {tweetElements}
      </ul>
    );
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  onRemoveTweetFromCollection: ({ id }) => {
    dispatch(removeTweetFromCollection(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetList);
