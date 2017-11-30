import TweetUtils from '../TweetUtils';

jest.dontMock('../TweetUtils');

describe('Tweet utilities module', function () {
  it('returns an array of tweet ids', function () {
    const tweetsMock = {
      tweet1: {},
      tweet2: {},
      tweet3: {}
    };

    const expectedListOfTweetIds = [
      'tweet1',
      'tweet2',
      'tweet3'
    ];
    const actualListOfTweetIds = TweetUtils.getListOfTweetIds(
      tweetsMock
    );

    expect(actualListOfTweetIds)
      .toEqual(expectedListOfTweetIds);
  });
});
