import { parseToRgb } from '../utils/css';

const darkColors = {
  color0: '#1f1f1f',
  color1: '#3f3f3f',
  color2: '#5f5f5f',
  color3: '#7f7f7f',
  color4: '#57a899',
  color5: '#6fc3a8',
  color6: '#86deb7',
  color7: '#e1e1e1',
  color8: '#fafafa',
  colorGray1: '#f3f3f3',
  colorGray0: '#3f3f3f',
};

const lightColors = {
  color8: '#1f1f1f',
  color7: '#3f3f3f',
  color6: '#5f5f5f',
  color5: '#408d8a',
  color4: '#57a899',
  color3: '#6fc3a8',
  color2: '#86deb7',
  color1: '#e1e1e1',
  color0: '#fafafa',
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
