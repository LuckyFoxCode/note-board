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
        console.log('---rerenderNotes---', filters.search);
        const notesTitleIncludeSearch = result.filter((notes) =>
          notes.title.includes(filters.search),
        );
        const notesTagsIncludeSearch = result.filter((note) =>
          note.tags.some((tag) =>
            tag.name.toLowerCase().includes(filters.search.toLowerCase()),
          ),
        );

        console.log('---Tags---', notesTagsIncludeSearch);
        console.log('---Title---', notesTitleIncludeSearch);

        result = result.filter((note) =>
          note.title.toLowerCase().includes(filters.search.toLowerCase()),
        );
      }

      result.forEach((note) => {
        const item = createdCard(note);
        notesEl.appendChild(item);
      });
    });
  });
}
