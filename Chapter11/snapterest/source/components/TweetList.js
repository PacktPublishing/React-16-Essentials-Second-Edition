import React, { Component } from 'react';
import Tweet from './Tweet';
import CollectionActionCreators from '../actions/CollectionActionCreators';

const listStyle = {
  padding: '0'
};

const listItemStyle = {
  display: 'inline-block',
  listStyle: 'none'
};

class TweetList extends Component {

  removeTweetFromCollection = (tweet) => {
    CollectionActionCreators.removeTweetFromCollection(tweet.id);
  }

  getListOfTweetIds = () =>
    Object.keys(this.props.tweets);

  getTweetElement = (tweetId) => {
    const { tweets } = this.props;
    const onRemoveTweetFromCollection = this.removeTweetFromCollection;
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
