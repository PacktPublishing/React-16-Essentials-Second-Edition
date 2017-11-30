import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server';
import { connect } from 'react-redux';

import CollectionControls from './CollectionControls';
import TweetList from './TweetList';
import Header from './Header';
import CollectionUtils from '../utils/CollectionUtils';

class Collection extends Component {
  createHtmlMarkupStringOfTweetList() {
    const { collectionTweets } = this.props;
    const htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={collectionTweets}/>
    );

    const htmlMarkup = {
      html: htmlString
    };

    return JSON.stringify(htmlMarkup);
  }

  render() {
    const { collectionTweets } = this.props;
    const numberOfTweetsInCollection = CollectionUtils
      .getNumberOfTweetsInCollection(collectionTweets);
    let htmlMarkup;

    if (numberOfTweetsInCollection > 0) {
      htmlMarkup = this.createHtmlMarkupStringOfTweetList();

      return (
        <div>
          <CollectionControls
            numberOfTweetsInCollection={numberOfTweetsInCollection}
            htmlMarkup={htmlMarkup}
          />

          <TweetList tweets={collectionTweets} />
        </div>
      );
    }

    return (<Header text="Your collection is empty"/>);
  }
}

const mapStateToProps = state => state.collection;

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Collection);
