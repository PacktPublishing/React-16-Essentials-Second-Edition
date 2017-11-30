const tweetReducer = (state = null, action) => {
  switch(action.type) {
    case 'receive_tweet':
      return action.tweet;
    default:
      return state;
  }
};

export default tweetReducer;
