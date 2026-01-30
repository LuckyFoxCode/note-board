export interface PersistedTag {
  name: string;
  color: string;
}

export interface PersistedNote {
  id: string;
  title: string;
  excerpt: string;
  tags: PersistedTag[];
  pinned: boolean;
  archived: boolean;
  categoryId: string;
  createdAt: string;
  updatedAt?: string;
}

export interface PersistedCategory {
  id: string;
  title: string;
  color: string;
}

export interface PersistedFilters {
  categoryId: string | null;
  search: string;
  sortBy: 'default' | 'date_desс' | 'date_asc';
  archived: boolean;
  pinnedOnly: boolean;
}

export interface PersistedUI {
  theme: 'light' | 'dark';
  isOpenSidebar: boolean;
  boardView: 'default' | 'archive';
}

export interface PersistedState {
  notes: PersistedNote[];
  categories: PersistedCategory[];
  filters: PersistedFilters;
  ui: PersistedUI;
}
