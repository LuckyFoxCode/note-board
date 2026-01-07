import type { AppState, UI } from '@/types';

export interface RootState {
  app: AppState;
  ui: UI;
}

export const state: RootState = {
  app: {
    notes: [],
    categories: [{ id: '1', color: '#fff', title: '1' }],
    filters: {
      categoriesId: null,
      search: '',
      archived: false,
      sortBy: 'date',
    },
  },
  ui: {
    theme: 'light',
  },
};
