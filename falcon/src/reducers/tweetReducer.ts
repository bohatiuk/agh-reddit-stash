// tslint:disable:no-null-keyword
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { LoadTweetsAction, SetLowerDateBound, SetUpperDateBound } from '../actions/tweetActions';
import { TAction } from '../actions/types';
import { RedditPost } from '../services/api/types';

export interface State {
  posts: readonly RedditPost[] | null;
  lowerDateBound: MaterialUiPickersDate;
  upperDateBound: MaterialUiPickersDate;
}
const initialState: State = {
  posts: [],
  lowerDateBound: null,
  upperDateBound: null
};

export function tweetReducer(state = initialState, action: TAction): State {
  if (LoadTweetsAction.isActionOfType(action)) {
    return { ...state, posts: action.payload };
  }
  else if (SetLowerDateBound.isActionOfType(action)) {
    return { ...state, lowerDateBound: action.payload ? action.payload.startOf('day') : null };
  }
  else if (SetUpperDateBound.isActionOfType(action)) {
    return { ...state, upperDateBound: action.payload ? action.payload.startOf('day') : null };
  }

  return state;
}
