import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Tweet from './Tweet';
import CollectionActionCreators from '../actions/CollectionActionCreators';

class StreamTweet extends Component {
  state = {
    numberOfCharactersIsIncreasing: null,
    headerText: null
  }

  addTweetToCollection = tweet => {
    CollectionActionCreators.addTweetToCollection(tweet);
  }

  componentWillMount() {
    console.log('[Snapterest] StreamTweet: 1. Running componentWillMount()');

    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: 'Latest public photo from Twitter'
    });

    window.snapterest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    };
  }

  componentDidMount() {
    console.log('[Snapterest] StreamTweet: 2. Running componentDidMount()');

    const componentDOMRepresentation = ReactDOM.findDOMNode(this);
    window.snapterest.headerHtml = componentDOMRepresentation.children[0].outerHTML;
    window.snapterest.tweetHtml = componentDOMRepresentation.children[1].outerHTML;
  }

  componentWillReceiveProps(nextProps) {
    console.log('[Snapterest] StreamTweet: 4. Running componentWillReceiveProps()');

    const { tweet: currentTweet } = this.props;
    const { tweet: nextTweet } = nextProps;

    const currentTweetLength = currentTweet.text.length;
    const nextTweetLength = nextTweet.text.length;
    const isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
    let headerText;

    this.setState({
      numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
    });

    if (isNumberOfCharactersIncreasing) {
      headerText = 'Number of characters is increasing';
    } else {
      headerText = 'Latest public photo from Twitter';
    }

    this.setState({
      headerText
    });

    window.snapterest.numberOfReceivedTweets++;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 5. Running shouldComponentUpdate()');
    return (nextProps.tweet.text.length > 1);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log('[Snapterest] StreamTweet: 6. Running componentWillUpdate()');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[Snapterest] StreamTweet: 7. Running componentDidUpdate()');
    window.snapterest.numberOfDisplayedTweets++;
  }

  componentWillUnmount() {
    console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()');

    delete window.snapterest;
  }

  render() {
    console.log('[Snapterest] StreamTweet: Running render()');

    const { tweet } = this.props;

    return (
      <section>
        <Header text={this.state.headerText} />
        <Tweet
          tweet={tweet}
          onImageClick={this.addTweetToCollection}
        />
      </section>
    );
  }
}

export default StreamTweet;
