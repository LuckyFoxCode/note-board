import type { AppState, CreateNotePayload, Note } from '@/types';

export function createNote(state: AppState, payload: CreateNotePayload) {
  const { title, excerpt, categoryId } = payload;

  // find => some
  // ''.length
  // && => ||

  const invalidateCategoryId = state.categories.find((c) =>
    c.id.includes(categoryId),
  );

  if (
    !(title.trim() !== '') &&
    !(excerpt.trim() !== '') &&
    !invalidateCategoryId
  ) {
    return state;
  }

  const newNote: Note = {
    id: crypto.randomUUID(),
    createdAt: new Date().toDateString(),
    updatedAt: new Date().toDateString(),
    archived: false,
    pinned: false,
    ...payload,
  };

  return [...state.notes, newNote];
}
