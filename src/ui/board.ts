import { cards } from '@/consts';
import { createdCard } from './card';

export function renderBoard(): HTMLElement {
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
  board.prepend(headerBoard);

  const wrapperCard = document.createElement('div');
  wrapperCard.classList.add('nb-board__wrapper-card');

  cards.forEach((note) => wrapperCard.append(createdCard(note)));
  board.append(wrapperCard);

  return board;
}
