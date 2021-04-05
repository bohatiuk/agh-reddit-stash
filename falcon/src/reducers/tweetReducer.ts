import { TweetActions } from '../actions/tweetActions';
import { ActionType } from '../actions/types';
import { ApiTweet } from '../services/api/types';

export interface State {
  tweets: ApiTweet[];
}
const initialState: State = {
  tweets: [],
};

export function tweetReducer(state = initialState, action: TweetActions): State {
  switch (action.type) {

  case ActionType.TweetLoad:
    return { ...state, tweets: action.tweets };

  default:
    return state;
  }
}
