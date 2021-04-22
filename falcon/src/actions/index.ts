import { AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { GlobalState } from '../reducers';

export * from './types';

export * from './styleActions';
export * from './tweetActions';

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  GlobalState,
  unknown,
  AnyAction
>;
