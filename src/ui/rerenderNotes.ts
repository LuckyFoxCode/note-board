import { state } from '@/store';
import { sortNotes, withElement } from '@/utils';
import { createdCard } from './card';

export function rerenderNotes() {
  const board = document.querySelector<HTMLElement>('[data-mount="board"]');

  withElement(board, (boardEl) => {
    const notesCard = boardEl.querySelector<HTMLDivElement>(
      '.nb-board__wrapper-cards',
    );
    const { categories, filters, notes } = state.app;

    const addCardBtn = boardEl.querySelector<HTMLButtonElement>(
      '.nb-board__add-card',
    );

    console.log(addCardBtn?.formTarget);

    if (!addCardBtn) return;

    addCardBtn.style.display = filters.categoryId === null ? 'none' : '';

    withElement(notesCard, (notesEl) => {
      notesEl.innerHTML = '';

      let result = notes;

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

      if (state.ui.boardView === 'default') {
        result = result.filter((note) => !note.archived);

        const hasCategory =
          filters.categoryId !== null &&
          categories.some((cat) => cat.id === filters.categoryId);

        if (hasCategory) {
          result = result.filter(
            (note) => note.categoryId === filters.categoryId,
          );
        }
      }

      if (state.ui.boardView === 'archive') {
        result = result.filter((note) => note.archived);
      }

      result = sortNotes(result, filters.sortBy, filters.pinnedOnly);

      result.forEach((note) => {
        const category = state.app.categories.find(
          (cat) => cat.id === note.categoryId,
        );
        const item = createdCard(note, category?.color ?? '#ccc');
        notesEl.appendChild(item);
      });
    });
  });
}
