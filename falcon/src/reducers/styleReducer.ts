import { StyleActions } from '../actions/styleActions';
import { ActionType } from '../actions/types';
import { darkTheme, lightTheme, Theme } from '../styles/styleguide';

export enum ThemeTypes { Light, Dark }

export interface State {
  themeType: ThemeTypes;
  theme: Theme;
}
const initialState: State = {
  themeType: ThemeTypes.Dark,
  theme: darkTheme
};

export function styleReducer(state = initialState, action: StyleActions) {
  switch (action.type) {

  case ActionType.StyleChangeTheme:
    const update = getThemeUpdates(state);
    return { ...state, ...update };

  default:
    return state;
  }
}

export function getThemeUpdates(state: State): Partial<State> {
  if (state.themeType === ThemeTypes.Dark) {
    return {
      themeType: ThemeTypes.Light,
      theme: lightTheme
    };
  }

  return {
    themeType: ThemeTypes.Dark,
    theme: darkTheme
  };
}
