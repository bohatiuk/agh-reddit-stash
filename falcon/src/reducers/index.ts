import { combineReducers } from 'redux';
import { State as StyleState, styleReducer } from './styleReducer';

export const rootReducer = combineReducers({
  style: styleReducer
});

export interface GlobalState {
  style: StyleState;
}
