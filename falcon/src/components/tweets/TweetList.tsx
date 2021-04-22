import React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../../reducers';
import Tweet from './Tweet';
import { ApiTweet } from '../../services/api/types';
import moment from 'moment';

function TweetList({ tweets, onTweetPicked }: Props) {
  return (
    <div>
      {tweets.map((tweet, i) => (
        <div key={tweet.id} onClick={() => onTweetPicked(tweet)}>
          <Tweet tweet={tweet} index={i} />
        </div>
      ))}
    </div>
  );
}

function mapStateToProps(state: GlobalState) {
  const filteredLower = state.tweets.lowerDateBound
    ? state.tweets.tweets.filter(tweet => state.tweets.lowerDateBound?.isSameOrBefore(moment(tweet.timestamp).startOf('day')))
    : state.tweets.tweets;

  const filtered = state.tweets.upperDateBound
    ? filteredLower.filter(tweet => state.tweets.upperDateBound?.isSameOrAfter(moment(tweet.timestamp).startOf('day')))
    : filteredLower;

  return {
    tweets: filtered
  };
}
type Props = ReturnType<typeof mapStateToProps> & {
  onTweetPicked(tweet: ApiTweet): void;
};

export default connect(mapStateToProps)(TweetList);
