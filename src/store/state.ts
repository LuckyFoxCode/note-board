import { cards } from '@/consts';
import type { AppState, UI } from '@/types';

export interface RootState {
  app: AppState;
  ui: UI;
}

export const state: RootState = {
  app: {
    notes: [...cards],
    categories: [{ id: '1', color: '#fcf', title: 'hobby' }],
    filters: {
      categoryId: null,
      search: '',
      sortBy: 'default',
      archived: false,
      pinnedOnly: false,
    },
  },
  ui: {
    theme: 'light',
    isOpenSidebar: true,
    boardView: 'default',
  },
};
