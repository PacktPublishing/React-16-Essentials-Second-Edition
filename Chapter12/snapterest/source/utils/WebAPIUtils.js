import SnapkiteStreamClient from 'snapkite-stream-client';
import { receiveTweet } from '../actions';

function initializeStreamOfTweets(store) {
  SnapkiteStreamClient.initializeStream((tweet) => {
    store.dispatch(receiveTweet(tweet));
  });
}

export { initializeStreamOfTweets };
