import type { Tag } from '@/types';

export const STORAGE_KEY = 'note-board-state';
export const UI_KEY = 'note-board-ui';

export const categoriesList: Tag[] = [
  { name: 'work', color: '#4A90E2' },
  { name: 'planning', color: '#00D084' },
  { name: 'design', color: '#A29BFE' },
  { name: 'urgent', color: '#FF6B6B' },
  { name: 'personal', color: '#F7B731' },
  { name: 'goals', color: '#FFB8A3' },
  { name: 'shopping', color: '#F291B0' },
  { name: 'home', color: '#38D39F' },
  { name: 'code', color: '#7D7D7D' },
  { name: 'review', color: '#56CCF2' },
  { name: 'documentation', color: '#FFD966' },
  { name: 'backend', color: '#4A90E2' },
  { name: 'weekend', color: '#F291B0' },
  { name: 'database', color: '#FF6B6B' },
  { name: 'critical', color: '#FF6B6B' },
];

export const COLORS_CATEGORIES = {
  violet: '#8e54e9',
  green: '#38d39f',
  orange: '#f2994a',
  blue: '#56ccf2',
  rose: '#f291b0',
  yellow: '#ffd166',
  sky: '#6c63ff',
};
