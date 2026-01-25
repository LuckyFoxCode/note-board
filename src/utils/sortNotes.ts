import type { Note } from '@/types';

export function sortNotes(
  notes: Note[],
  sortBy: 'default' | 'date_desc' | 'date_asc',
  pinnedOnly: boolean,
): Note[] {
  return [...notes].sort((a, b) => {
    if (pinnedOnly) {
      if (a.pinned && !b.pinned) return -1;
      if (!a.pinned && b.pinned) return 1;
    }

    if (sortBy === 'date_desc')
      return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    if (sortBy === 'date_asc')
      return new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime();
    return 0;
  });
}
