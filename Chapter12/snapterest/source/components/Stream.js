import React, { Component } from 'react';
import { connect } from 'react-redux';

import StreamTweet from './StreamTweet';
import Header from './Header';
import TweetStore from '../stores/TweetStore';

class Stream extends Component {
  render() {
    const { tweet } = this.props;
    const { onAddTweetToCollection } = this.props;
    const headerText = 'Waiting for public photos from Twitter...';

    if (tweet) {
      return (<StreamTweet tweet={tweet}/>);
    }

    return (<Header text={headerText}/>);
  }
}

const mapStateToProps = ({ tweet }) => ({ tweet });

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream);
