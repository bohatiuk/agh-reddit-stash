import { MaterialUiPickersDate } from '@material-ui/pickers/typings/date';
import { AppThunk } from '.';
import { ApiClient } from '../services/api/ApiClient';
import { apiClient, RedditPost } from '../services/api/types';
import { AppAction, TAction } from './types';

export class LoadTweetsAction extends AppAction {
  public static type = 'LoadTweetsAction';

  static create(): AppThunk {
    return async dispatch => {
      const posts = await apiClient.getPosts();

      dispatch({
        type: LoadTweetsAction.type,
        payload: posts,
      });
    };
  }

  static isActionOfType(action: TAction): action is TLoadTweetsActions {
    return LoadTweetsAction.type === action.type;
  }
}
export interface TLoadTweetsActions extends TAction {
  payload: readonly RedditPost[];
}

export class SetLowerDateBound extends AppAction {
  public static type = 'SetLowerDateBound';

  static create(date: MaterialUiPickersDate) {
    return {
      type: SetLowerDateBound.type,
      payload: date
    };
  }

  static isActionOfType(action: TAction): action is TSetLowerDateBound {
    return SetLowerDateBound.type === action.type;
  }
}

export interface TSetLowerDateBound extends TAction {
  payload: MaterialUiPickersDate;
}

export class SetUpperDateBound extends AppAction {
  public static type = 'SetUpperDateBound';

  static create(date: MaterialUiPickersDate) {
    return {
      type: SetUpperDateBound.type,
      payload: date
    };
  }

  static isActionOfType(action: TAction): action is TSetUpperDateBound {
    return SetUpperDateBound.type === action.type;
  }
}

export interface TSetUpperDateBound extends TAction {
  payload: MaterialUiPickersDate;
}
