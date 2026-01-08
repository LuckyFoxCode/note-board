import type { Note } from '@/types';

export type FilterableNoteField = 'categoryId' | 'archived';

export interface NotesFilter {
  field: FilterableNoteField;
  value: Note[FilterableNoteField];
}

export interface NotesStats {
  totalNotes: number;
  totalActiveNotes: number;
  totalArchivedNotes: number;
}

export type NotesByCategory = Record<string, Note[]>;
