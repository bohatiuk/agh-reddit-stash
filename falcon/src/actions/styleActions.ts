import { ActionType } from './types';

export function toggleTheme() {
  return {
    type: ActionType.StyleChangeTheme,
  };
}
export type ToggleThemeAction = ReturnType<typeof toggleTheme>;

export type StyleActions = ToggleThemeAction;
