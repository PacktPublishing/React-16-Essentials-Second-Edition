const initialState = {
  collectionTweets: {},
  collectionName: 'new',
  isEditingName: false,
  editingName: ''
};

const collectionReducer = (
  state = initialState,
  action
) => {
  let tweet;
  let collectionTweets;

  switch (action.type) {
    case 'add_tweet_to_collection':
      tweet = {};
      tweet[action.tweet.id] = action.tweet;

      return {
        ...state,
        collectionTweets: {
          ...state.collectionTweets,
          ...tweet
        }
      };

    case 'remove_tweet_from_collection':
      collectionTweets = { ...state.collectionTweets };
      delete collectionTweets[action.tweetId];

      return {
        ...state,
        collectionTweets
      };

    case 'remove_all_tweets_from_collection':
      collectionTweets = {};

      return {
        ...state,
        collectionTweets
      };

    case 'set_collection_name':
      return {
        ...state,
        collectionName: state.editingName,
        isEditingName: false
      };

    case 'toggle_is_editing_name':
      return {
        ...state,
        isEditingName: !state.isEditingName
      };

    case 'set_editing_name':
      return {
        ...state,
        editingName: action.editingName
      };

    default:
      return state;
  }
};

export default collectionReducer;
