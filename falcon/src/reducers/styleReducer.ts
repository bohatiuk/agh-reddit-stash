import { TAction } from '../actions';
import { ToggleThemeAction } from '../actions/styleActions';
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

export function styleReducer(state = initialState, action: TAction) {
  if (ToggleThemeAction.isActionOfType(action)) {
    const update = getThemeUpdates(state);
    return { ...state, ...update };
  }

  return state;
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
