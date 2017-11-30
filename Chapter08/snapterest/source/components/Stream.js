import React, { Component } from 'react';
import SnapkiteStreamClient from 'snapkite-stream-client';
import StreamTweet from './StreamTweet';
import Header from './Header';

class Stream extends Component {
  state = {
    tweet: null
  }

  componentDidMount() {
    SnapkiteStreamClient.initializeStream(this.handleNewTweet);
  }

  componentWillUnmount() {
    SnapkiteStreamClient.destroyStream();
  }

  handleNewTweet = (tweet) => {
    this.setState({
      tweet: tweet
    });
  }

  render() {
    const { tweet } = this.state;
    const { onAddTweetToCollection } = this.props;
    const headerText = 'Waiting for public photos from Twitter...';

    if (tweet) {
      return (
        <StreamTweet
          tweet={tweet}
          onAddTweetToCollection={this.props.onAddTweetToCollection}
        />
      );
    }

    return (
      <Header text={headerText}/>
    );
  }
}

export default Stream;
