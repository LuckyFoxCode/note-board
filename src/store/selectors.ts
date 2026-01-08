import type { AppState, Note } from '@/types';
import type { FilterableNoteField, NotesStats } from './state.type';

export function getFilteredNotes<K extends FilterableNoteField>(
  state: AppState,
  field: K,
  value: Note[K],
): Note[] {
  return state.notes.filter((note) => note[field] === value);
}

export function getStatsNotes(state: AppState): NotesStats {
  return {
    totalNotes: state.notes.length,
    totalActiveNotes: state.notes.filter((note) => !note.archived).length,
    totalArchivedNotes: state.notes.filter((note) => note.archived).length,
  };
}
