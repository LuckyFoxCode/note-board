import type {
  AppState,
  Category,
  CreateCategoryPayload,
  CreateNotePayload,
  Note,
  UpdateNotePayload,
} from '@/types';
import { getRandomColor } from '@/utils';

export function addCategory(
  state: AppState,
  payload: CreateCategoryPayload,
): AppState {
  if (payload.title.trim() === '') return state;

  const newCategory: Category = {
    id: crypto.randomUUID(),
    title: payload.title,
    color: getRandomColor(),
  };

  return {
    ...state,
    categories: [...state.categories, newCategory],
  };
}

export function removeCategory(
  state: AppState,
  payload: Category['id'],
): AppState {
  return {
    ...state,
    categories: state.categories.filter((category) => category.id !== payload),
  };
}

export function addNote(state: AppState, payload: CreateNotePayload): AppState {
  const { title, excerpt, categoryId, tags } = payload;

  const categoryIsValid = state.categories.some((c) => c.id === categoryId);

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
    categoryId,
    title,
    excerpt,
    tags,
  };

  return {
    ...state,
    notes: [...state.notes, newNote],
  };
}

export function toggleArchivedNotes(
  state: AppState,
  payload: string,
): AppState {
  const updatedAt = new Date().toISOString();

  return {
    ...state,
    notes: state.notes.map((note) =>
      note.id === payload
        ? { ...note, archived: !note.archived, updatedAt }
        : note,
    ),
  };
}

export function togglePinnedNotes(state: AppState, payload: string): AppState {
  const updatedAt = new Date().toISOString();

  return {
    ...state,
    notes: state.notes.map((note) =>
      note.id === payload ? { ...note, pinned: !note.pinned, updatedAt } : note,
    ),
  };
}

export function updateNote(
  state: AppState,
  payload: UpdateNotePayload,
): AppState {
  const { id, title, excerpt, tags } = payload;

  if (title.trim() === '' || excerpt.trim() === '' || !tags.length) {
    return state;
  }

  const updatedAt = new Date().toISOString();

  return {
    ...state,
    notes: state.notes.map((note) =>
      note.id === id ? { ...note, ...payload, updatedAt } : note,
    ),
  };
}

export function removeNote(state: AppState, payload: Note['id']): AppState {
  return {
    ...state,
    notes: state.notes.filter((note) => note.id !== payload),
  };
}
