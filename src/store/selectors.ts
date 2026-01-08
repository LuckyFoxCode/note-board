import type { AppState, Note } from '@/types';

export function getFilteredNotes(
  state: AppState,
  field: keyof Note,
  value: Note[keyof Note],
): Note[] {
  return state.notes.filter((note) => note[field] === value);
}
