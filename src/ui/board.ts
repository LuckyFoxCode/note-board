import { createdCard } from './card';
import { state } from '@/store';
import { renderSorting } from './sort';

export function renderBoard(): HTMLElement {
  const { notes, filters } = state.app;
  const sort = renderSorting();

  const board = document.createElement('main');
  board.classList.add('nb-board');
  board.dataset.role = 'main';
  board.dataset.mount = 'board';
  board.ariaLabel = 'Board';

  const headerBoard = document.createElement('header');
  headerBoard.classList.add('nb-board__header');

  const titleBoard = document.createElement('h1');
  titleBoard.textContent = 'Welcome to NoteBoard!';

  headerBoard.append(titleBoard);

  const wrapperCard = document.createElement('div');
  wrapperCard.classList.add('nb-board__wrapper-cards');

  let filteredNotes = notes;

  if (state.ui.boardView === 'default')
    filteredNotes = filteredNotes.filter((note) => !note.archived);

  if (state.ui.boardView === 'archive')
    filteredNotes = filteredNotes.filter((note) => note.archived);

  if (filters.categoryId)
    filteredNotes = filteredNotes.filter(
      (n) => n.categoryId === filters.categoryId,
    );

  filteredNotes.forEach((note) => {
    const category = state.app.categories.find(
      (cat) => cat.id === note.categoryId,
    );
    wrapperCard.append(createdCard(note, category?.color ?? '#ccc'));
  });

  board.append(headerBoard, sort, wrapperCard);

  return board;
}
