import SnapkiteStreamClient from 'snapkite-stream-client';
import { receiveTweet } from '../actions/TweetActionCreators';

function initializeStreamOfTweets() {
  SnapkiteStreamClient.initializeStream(receiveTweet);
}

export { initializeStreamOfTweets };
