import React, { Component } from 'react';
import PropTypes from 'prop-types';

const tweetStyle = {
  position: 'relative',
  display: 'inline-block',
  width: '300px',
  height: '400px',
  margin: '10px'
};

const imageStyle = {
  maxHeight: '400px',
  boxShadow: '0px 1px 1px 0px #aaa',
  border: '1px solid #fff'
};

class Tweet extends Component {
  static propTypes = {
    tweet(properties, propertyName, componentName) {
      const tweet = properties[propertyName];

      if (!tweet) {
        return new Error('Tweet must be set.');
      }

      if (!tweet.media) {
        return new Error('Tweet must have an image.');
      }
    },
    onImageClick: PropTypes.func
  }

  handleImageClick = () => {
    const {
      tweet,
      onImageClick
    } = this.props;

    if (onImageClick) {
      onImageClick(tweet);
    }
  }

  render() {
    const tweet = this.props.tweet;
    const tweetMediaUrl = tweet.media[0].url;

    return (
      <div style={tweetStyle}>
        <img
          src={tweetMediaUrl}
          onClick={this.handleImageClick}
          style={imageStyle}
        />
      </div>
    );
  }
}

export default Tweet;
