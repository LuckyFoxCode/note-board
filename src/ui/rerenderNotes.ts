import { state } from '@/store';
import { withElement } from '@/utils';
import { createdCard } from './card';

export function rerenderNotes() {
  const board = document.querySelector<HTMLElement>('[data-mount="board"]');

  withElement(board, (boardEl) => {
    const notes = boardEl.querySelector<HTMLDivElement>(
      '.nb-board__wrapper-cards',
    );

    withElement(notes, (notesEl) => {
      notesEl.innerHTML = '';

      const { categories, filters, notes } = state.app;

      let result = notes;

      if (filters.archived) {
        result = result.filter((note) => note.archived === filters.archived);
      }

      const hasCategory =
        filters.categoryId !== null &&
        categories.some((cat) => cat.id === filters.categoryId);

      if (hasCategory) {
        result = result.filter(
          (note) => note.categoryId === filters.categoryId,
        );
      }

      if (filters.search) {
        result = result.filter((note) => {
          const inTitle = note.title
            .toLowerCase()
            .includes(filters.search.toLowerCase());
          const inTags = note.tags.some((tag) =>
            tag.name.toLowerCase().includes(filters.search.toLowerCase()),
          );

          return inTitle || inTags;
        });
      }

      if (filters.pinnedOnly) {
        result = result.filter((note) => note.pinned);
      }

      if (filters.sortBy === 'date_desc') {
        result.sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        );
      } else if (filters.sortBy === 'date_asc') {
        result.sort(
          (a, b) =>
            new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
        );
      }

      result.forEach((note) => {
        const item = createdCard(note);
        notesEl.appendChild(item);
      });
    });
  });
}
