import React from 'react';
import { connect } from 'react-redux';
import { GlobalState } from '../../reducers';
import Tweet from './Tweet';
import { ApiTweet } from '../../services/api/types';

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
  return {
    tweets: state.tweets.tweets
  };
}
type Props = ReturnType<typeof mapStateToProps> & {
  onTweetPicked(tweet: ApiTweet): void;
};

export default connect(mapStateToProps)(TweetList);
