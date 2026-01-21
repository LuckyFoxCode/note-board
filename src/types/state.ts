import type { Category, Note } from './domain';

export interface AppState {
  notes: Note[];
  categories: Category[];
  filters: {
    categoryId: string | null;
    search: string;
    sortBy: 'default' | 'date_desc' | 'date_asc';
    archived: boolean;
    pinnedOnly: boolean;
  };
}

export interface UI {
  theme: 'light' | 'dark';
  isOpenSidebar: boolean;
}
