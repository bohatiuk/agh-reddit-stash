import { AppThunk } from '.';
import { ApiClient } from '../services/api/ApiClient';
import { ApiTweet } from '../services/api/types';
import { ActionType } from './types';

export function loadTweets(): AppThunk {
  return async dispatch => {
    const tweets = await ApiClient.getInstance().getTweets();

    dispatch({
      type: ActionType.TweetLoad,
      tweets,
    });
  };
}
export type LoadTweetsActions = {
  type: ActionType.TweetLoad,
  tweets: ApiTweet[];
};

export type TweetActions = LoadTweetsActions;
