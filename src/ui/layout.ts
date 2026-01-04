import { cards } from '@/consts';
import { createdCard } from './card';

export function createLayout(): {
  sidebar: HTMLElement;
  board: HTMLElement;
} {
  const sidebar = document.createElement('aside');
  sidebar.classList.add('nb-sidebar');
  sidebar.textContent = 'Sidebar';
  sidebar.dataset.role = 'navigation';
  sidebar.dataset.mount = 'sidebar';
  sidebar.ariaLabel = 'Navigation';

  const themeBtn = document.createElement('button');
  themeBtn.classList.add('nb-theme-btn');
  themeBtn.type = 'button';
  themeBtn.textContent = '☀️';

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeBtn.textContent =
      document.body.classList.contains('dark') === true ? '🌙' : '☀️';
  });

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
  sidebar.append(themeBtn);
  board.append(wrapperCard);

  return { sidebar, board };
}
