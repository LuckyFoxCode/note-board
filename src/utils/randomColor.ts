import { COLORS_CATEGORIES } from '@/consts';

export function getRandomColor(): string {
  const colorsLength = Object.values(COLORS_CATEGORIES).length;

  const randomColor =
    Object.values(COLORS_CATEGORIES)[Math.floor(Math.random() * colorsLength)];

  return randomColor;
}
