import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Tweet from './Tweet';

class StreamTweet extends Component {
  state = {
    numberOfCharactersIsIncreasing: null,
    headerText: null
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

  componentWillUnmount() {
    console.log('[Snapterest] StreamTweet: 8. Running componentWillUnmount()');

    delete window.snapterest;
  }

  render() {
    console.log('[Snapterest] StreamTweet: Running render()');

    return (
      <section>
        <Header text={this.state.headerText} />
        <Tweet
          tweet={this.props.tweet}
          onImageClick={this.props.onAddTweetToCollection}
        />
      </section>
    );
  }
}

export default StreamTweet;
