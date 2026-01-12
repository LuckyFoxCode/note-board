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

      const hasCategory =
        filters.categoryId !== null &&
        categories.some((cat) => cat.id === filters.categoryId);

      const filteredNotes = hasCategory
        ? notes.filter((note) => note.categoryId === filters.categoryId)
        : notes;

      filteredNotes.forEach((note) => {
        const item = createdCard(note);
        notesEl.appendChild(item);
      });
    });
  });
}
