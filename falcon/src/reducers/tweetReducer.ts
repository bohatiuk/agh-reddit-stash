// tslint:disable:no-null-keyword
import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { LoadTweetsAction, SetLowerDateBound, SetUpperDateBound } from '../actions/tweetActions';
import { TAction } from '../actions/types';
import { ApiTweet } from '../services/api/types';

export interface State {
  tweets: ApiTweet[];
  lowerDateBound: MaterialUiPickersDate;
  upperDateBound: MaterialUiPickersDate;
}
const initialState: State = {
  tweets: [],
  lowerDateBound: null,
  upperDateBound: null
};

export function tweetReducer(state = initialState, action: TAction): State {
  if (LoadTweetsAction.isActionOfType(action)) {
    return { ...state, tweets: action.payload };
  }
  else if (SetLowerDateBound.isActionOfType(action)) {
    return { ...state, lowerDateBound: action.payload };
  }
  else if (SetUpperDateBound.isActionOfType(action)) {
    return { ...state, upperDateBound: action.payload };
  }

  return state;
}
