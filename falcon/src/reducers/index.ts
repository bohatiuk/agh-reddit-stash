import { combineReducers } from 'redux';
import { State as StyleState, styleReducer } from './styleReducer';
import { State as TweetState, tweetReducer } from './tweetReducer';

export const rootReducer = combineReducers({
  style: styleReducer,
  tweets: tweetReducer
});

export interface GlobalState {
  style: StyleState;
  tweets: TweetState;
}
