import { AppThunk } from '..';

export enum ActionType {
  StyleChangeTheme = 'StyleChangeTheme',

  TweetLoad = 'TweetLoad',
  TweetSetLowerBound = 'TweetSetLowerBound',
  TweetSetUpperBound = 'TweetSetUpperBound',
}

export interface TAction {
  type: string;
  payload?: any;
}
export abstract class AppAction {
  public static type: string;

  static create(t?: any): TAction | AppThunk {
    return {
      type: this.type,
      payload: t
    };
  }

  static isActionOfType(action: TAction): action is TAction {
    return this.type === action.type;
  }
}
