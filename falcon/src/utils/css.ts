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

export function parseToRgb(object: {}): ColorsRGB {
  return Object.fromEntries(Object.entries(object).map(([key, value]) => {
    return [key + 'RGB', hexToRgbString(value as string)];
  })) as ColorsRGB;
}
