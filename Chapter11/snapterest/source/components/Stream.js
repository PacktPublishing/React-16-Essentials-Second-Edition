import React, { Component } from 'react';
import StreamTweet from './StreamTweet';
import Header from './Header';
import TweetStore from '../stores/TweetStore';

class Stream extends Component {
  state = {
    tweet: TweetStore.getTweet()
  }

  componentDidMount() {
    TweetStore.addChangeListener(this.onTweetChange);
  }

  componentWillUnmount() {
    TweetStore.removeChangeListener(this.onTweetChange);
  }

  onTweetChange = () => {
    this.setState({
      tweet: TweetStore.getTweet()
    });
  }

  render() {
    const { tweet } = this.state;
    const { onAddTweetToCollection } = this.props;
    const headerText = "Waiting for public photos from Twitter...";

    if (tweet) {
      return (<StreamTweet tweet={tweet}/>);
    }

    return (<Header text={headerText}/>);
  }
}

export default Stream;
