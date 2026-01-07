import type { Category, Note } from './domain';

export interface AppState {
  notes: Note[];
  categories: Category[];
  filters: {
    categoriesId: string | null;
    search: string;
    sortBy: 'date' | 'pinned';
    archived: boolean;
  };
}

export interface UI {
  theme: 'light' | 'dark';
}
