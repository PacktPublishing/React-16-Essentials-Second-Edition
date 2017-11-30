export const addTweetToCollection = tweet => ({
  type: 'add_tweet_to_collection',
  tweet
});

export const removeTweetFromCollection = tweetId => ({
  type: 'remove_tweet_from_collection',
  tweetId
});

export const removeAllTweetsFromCollection = () => ({
  type: 'remove_all_tweets_from_collection'
});

export const setCollectionName = collectionName => ({
  type: 'set_collection_name',
  collectionName
});

export const toggleIsEditingName = () => ({
  type: 'toggle_is_editing_name'
});

export const setEditingName = editingName => ({
  type: 'set_editing_name',
  editingName
});

export const receiveTweet = tweet => ({
  type: 'receive_tweet',
  tweet
});
