import type { Category, Note } from './domain';

export interface AppState {
  notes: Note[];
  categories: Category[];
  filters: {
    categoriesId?: string;
    search?: string;
    sortBy?: 'date' | 'pinned';
    archoved?: boolean;
  };
}

export interface UI {
  theme: 'light' | 'dark';
}
