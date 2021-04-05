import { ColorsRGB } from '../styles/styleguide';

export function hexToRgb(hex: string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
   ] : [255, 255, 255];
}

export function hexToRgbString(hex: string) {
  return hexToRgb(hex).join(',');
}

export function parseToRgb(object: { [key: string]: string}): ColorsRGB {
  return Object.fromEntries(Object.entries(object)
    .filter(([key]) => (key as string).startsWith('color'))
    .map(([key, value]) => {
    return [key + 'RGB', hexToRgbString(value as string)];
  })) as ColorsRGB;
}

// export function defaultShadow({ theme }: TTP) {
//   return `-webkit-box-shadow: 10px 10px 10px 0px rgba(${theme.color5RGB},0.6);
//   -moz-box-shadow: 10px 10px 10px 0px rgba(${theme.color5RGB},0.6);
//   box-shadow: 10px 10px 10px 0px rgba(${theme.color5RGB},0.6);`;
// }
// export function smallShadow({ theme }: TTP) {
//   return `-webkit-box-shadow: 2px 2px 2px 0px rgba(${theme.color5RGB},0.6);
//   -moz-box-shadow: 2px 2px 2px 0px rgba(${theme.color5RGB},0.6);
//   box-shadow: 2px 2px 2px 0px rgba(${theme.color5RGB},0.6);`;
// }
