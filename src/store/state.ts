import { cards } from '@/consts';
import type { AppState, UI } from '@/types';

export interface RootState {
  app: AppState;
  ui: UI;
}

export const state: RootState = {
  app: {
    notes: [...cards],
    categories: [{ id: '1', color: '#fff', title: '1' }],
    filters: {
      categoryId: null,
      search: '',
      archived: false,
      sortBy: 'date',
    },
  },
  ui: {
    theme: 'light',
  },
};
