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
  // board.prepend(headerBoard);

  const wrapperCard = document.createElement('div');
  wrapperCard.classList.add('nb-board__wrapper-cards');

  (filters.categoryId !== null
    ? notes.filter((note) => note.categoryId === filters.categoryId)
    : notes
  ).forEach((note) => wrapperCard.append(createdCard(note)));

  board.append(headerBoard, sort, wrapperCard);

  return board;
}
