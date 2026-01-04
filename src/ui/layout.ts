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

  const board = document.createElement('main');
  board.classList.add('nb-board');
  board.textContent = 'Board';
  board.dataset.role = 'main';
  board.dataset.mount = 'board';
  board.ariaLabel = 'Board';

  const themeBtn = document.createElement('button');
  themeBtn.classList.add('nb-theme-btn');
  themeBtn.type = 'button';
  themeBtn.textContent = 'Toggle theme';

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
  });

  const wrapperCard = document.createElement('div');
  wrapperCard.classList.add('nb-board__wrapper-card');

  const card = createdCard();

  wrapperCard.append(card);
  board.append(themeBtn, wrapperCard);

  return { sidebar, board };
}
