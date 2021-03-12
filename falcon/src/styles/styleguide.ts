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
  colorBG2: '#313131',
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

  colorBG1: '#F0F0F0',
  colorBG2: '#E0E0E0',
  colorBG3: '#B0B0B0',
};

export const darkColorsRGB = {
  colorG1RGB: hexToRgbString(darkColors.colorG1),
  colorG2RGB: hexToRgbString(darkColors.colorG2),
  colorG3RGB: hexToRgbString(darkColors.colorG3),
  colorG4RGB: hexToRgbString(darkColors.colorG4),
  colorG5RGB: hexToRgbString(darkColors.colorG5),
  colorG6RGB: hexToRgbString(darkColors.colorG6),
  colorBG1RGB: hexToRgbString(darkColors.colorBG1),
  colorBG2RGB: hexToRgbString(darkColors.colorBG2),
  colorBG3RGB: hexToRgbString(darkColors.colorBG3),
};

export const lightColorsRGB = {
  colorG1RGB: hexToRgbString(lightColors.colorG1),
  colorG2RGB: hexToRgbString(lightColors.colorG2),
  colorG3RGB: hexToRgbString(lightColors.colorG3),
  colorG4RGB: hexToRgbString(lightColors.colorG4),
  colorG5RGB: hexToRgbString(lightColors.colorG5),
  colorG6RGB: hexToRgbString(lightColors.colorG6),
  colorBG1RGB: hexToRgbString(lightColors.colorBG1),
  colorBG2RGB: hexToRgbString(lightColors.colorBG2),
  colorBG3RGB: hexToRgbString(lightColors.colorBG3),
};

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

  fontH1: '72px Roboto',
  fontH2: '56px Roboto',
  fontH3: '48px Roboto',
  fontH4: '42px Roboto',
  fontH5: '36px Roboto',
};

export const styles = {
  ...distances,
  ...distances,
  ...params,
  ...fonts,
};

export const darkTheme = {
  ...styles,
  ...darkColors,
  ...darkColorsRGB,
};

export const lightTheme = {
  ...styles,
  ...lightColors,
  ...lightColorsRGB,
};

export type Theme = typeof lightTheme;
export type TTP = {
  theme: Theme;
};
