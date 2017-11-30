import React, { Component } from 'react';
import Tweet from './Tweet';

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
    const { tweets, onRemoveTweetFromCollection } = this.props;
    const tweet = tweets[tweetId];
    let tweetElement;

    if (onRemoveTweetFromCollection) {
      tweetElement = (
        <Tweet
          tweet={tweet}
          onImageClick={onRemoveTweetFromCollection}
        />
      );
    } else {
      tweetElement = <Tweet tweet={tweet}/>;
    }

    return (
      <li style={listItemStyle} key={tweet.id}>
        {tweetElement}
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

export default TweetList;
