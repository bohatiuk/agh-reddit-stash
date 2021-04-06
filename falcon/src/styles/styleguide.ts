import { parseToRgb } from '../utils/css';

const darkColors = {
  colorBG0: '#121212',
  colorBG1: '#181818',
  colorBG2: '#242424',
  colorBG3: '#363636',
  colorP1: '#B15CE6',
  colorP2: '#CDE650',
  colorGray0: '#363636',
  colorGray1: '#3f3f3f',
  colorText: '#f3f3f3',
  colorTextN: '#121212',
  shadow: 'none',
};

const lightColors = {
  colorBG0: '#f3f3f3',
  colorBG1: '#f3f3f3',
  colorBG2: '#f3f3f3',
  colorBG3: '#d2d2d2',
  colorP1: '#6E00B3',
  colorP2: '#ADCC14',
  colorGray0: '#363636',
  colorGray1: '#3f3f3f',
  colorText: '#121212',
  colorTextN: '#f3f3f3',
  shadow: `-webkit-box-shadow: 4px 4px 8px 1px rgba(18,18,18,0.4);
  -moz-box-shadow: 4px 4px 8px 1px rgba(18,18,18,0.4);
  box-shadow: 4px 4px 8px 1px rgba(18,18,18,0.4);`
};

export const darkColorsRGB = parseToRgb(darkColors);

export const lightColorsRGB = parseToRgb(lightColors);

const distances = {
  defaultRadius: '4px',

  m1: '5px',
  m2: '10px',
  m3: '15px',
  m4: '20px',
  m5: '25px',
  M1: '50px',
  M2: '75px',
  M3: '100px',
};

const params = {
  transitionParams: '280ms ease-out',
  transitionParams1: '140ms ease-out',
};

const fonts = {
  fontN1: '200 12px Roboto',
  fontN2: '200 14px Roboto',
  fontN3: '200 16px Roboto',
  fontN4: '200 18px Roboto',
  fontN5: '200 20px Roboto',
  fontN6: '200 24px Roboto',
  fontN7: '200 28px Roboto',
  fontN8: '200 32px Roboto',

  fontH1: '200 72px Roboto',
  fontH2: '200 56px Roboto',
  fontH3: '200 48px Roboto',
  fontH4: '200 42px Roboto',
  fontH5: '200 36px Roboto',
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

export type ColorsRGB = {
  colorBG0RGB: string,
  colorBG1RGB: string,
  colorBG2RGB: string,
  colorBG3RGB: string,
  colorP1RGB: string,
  colorP2RGB: string,
  colorGray0RGB: string,
  colorGray1RGB: string,
};

export type Theme = typeof lightTheme;

export const appearTimeout = 750;
