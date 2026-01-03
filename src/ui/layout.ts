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

  return { sidebar, board };
}
