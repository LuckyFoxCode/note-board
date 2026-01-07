import type { AppState, UI } from '@/types';

export interface RootState {
  app: AppState;
  ui: UI;
}

export const state: RootState = {
  app: {
    notes: [],
    categories: [],
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
