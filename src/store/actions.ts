import type { AppState, CreateNotePayload, Note } from '@/types';

export function addNoteToState(
  state: AppState,
  payload: CreateNotePayload,
): AppState {
  const { title, excerpt, categoryId, tags } = payload;

  const categoryIsValid =
    categoryId !== null && state.categories.some((c) => c.id === categoryId);

  if (title.trim() === '' || excerpt.trim() === '' || !categoryIsValid) {
    return state;
  }
  const now = new Date().toISOString();

  const newNote: Note = {
    id: crypto.randomUUID(),
    createdAt: now,
    updatedAt: now,
    archived: false,
    pinned: false,
    categoryId: categoryId!,
    title,
    excerpt,
    tags,
  };

  return {
    ...state,
    notes: [...state.notes, newNote],
  };
}
