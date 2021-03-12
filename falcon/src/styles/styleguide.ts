import { hexToRgbString } from '../utils/css';

const colorBase = {
  colorG1: '#84cf97',
  colorG2: '#59b598',
  colorG3: '#3a9a93',
  colorG4: '#2d7e86',
  colorG5: '#2e6272',
  colorG6: '#2f4858',
};

const darkColors = {
  ...colorBase,
  colorBG1: '#181818',
  colorBG2: '#606060',
  colorBG3: '#909090',

  colorText1: '#F8F8F8',
  colorText2: '#E0E0E0',
  colorText3: '#D0D0D0',
};

const lightColors = {
  ...colorBase,
  colorText1: '#181818',
  colorText2: '#606060',
  colorText3: '#909090',

  colorBG1: '#F8F8F8',
  colorBG2: '#E0E0E0',
  colorBG3: '#D0D0D0',
};

// export const colorsRGB = {
//   colorG1RGB: hexToRgbString(colors.colorG1),
//   colorG2RGB: hexToRgbString(colors.colorG2),
//   colorG3RGB: hexToRgbString(colors.colorG3),
//   colorG4RGB: hexToRgbString(colors.colorG4),
//   colorG5RGB: hexToRgbString(colors.colorG5),
//   colorG6RGB: hexToRgbString(colors.colorG6),
// };

const distances = {
  defaultRadius: '4px',

  m1: '5px',
  m2: '10px',
  m3: '15px',
  m4: '20px',
  m5: '25px',
};

const params = {
  transitionParams: '280ms ease-out',
};

const fonts = {
  fontN1: '12px Roboto',
  fontN2: '14px Roboto',
  fontN3: '16px Roboto',
  fontN4: '18px Roboto',
  fontN5: '20px Roboto',
};

export const styles = {
  ...distances,
  ...distances,
  ...params,
  ...fonts,
};

export const darkTheme = {
  ...styles,
  ...darkColors
};

export const lightTheme = {
  ...styles,
  ...lightColors
};

export type Theme = typeof lightTheme;
export type TTP = {
  theme: Theme;
};
