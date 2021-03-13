import { hexToRgbString, parseToRgb } from '../utils/css';

const darkColors = {
  color0: '#1c2b30',
  color1: '#1f3d43',
  color2: '#28727b',
  color3: '#408d8a',
  color4: '#57a899',
  color5: '#6fc3a8',
  color6: '#86deb7',
  color7: '#f0fbf6',
  color8: '#ffffff',
  colorGray1: '#f3f3f3',
  colorGray0: '#3f3f3f',
};

const lightColors = {
  color8: '#1c2b30',
  color7: '#1f3d43',
  color6: '#28727b',
  color5: '#408d8a',
  color4: '#57a899',
  color3: '#6fc3a8',
  color2: '#86deb7',
  color1: '#f0fbf6',
  color0: '#ffffff',
  colorGray0: '#f3f3f3',
  colorGray1: '#3f3f3f',
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

export type ColorsRGB = {
  color0RGB: string;
  color1RGB: string;
  color2RGB: string;
  color3RGB: string;
  color4RGB: string;
  color5RGB: string;
  color6RGB: string;
  color7RGB: string;
  color8RGB: string;
  colorGray1RGB: string;
  colorGray0RGB: string;
};

export type Theme = typeof lightTheme;

export type TTP = {
  theme: Theme;
};
