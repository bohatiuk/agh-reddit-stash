import { ActionType, AppAction, TAction } from './types';

export function toggleTheme() {
  return {
    type: ActionType.StyleChangeTheme,
  };
}
export class ToggleThemeAction extends AppAction {
  public static type = 'ToggleThemeAction';

  static create() {
    return { type: ToggleThemeAction.type };
  }

  static isActionOfType(action: TAction): action is TToggleThemeAction {
    return ToggleThemeAction.type === action.type;
  }
}
export type TToggleThemeAction = TAction;
