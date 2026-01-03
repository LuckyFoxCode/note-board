export function createLayout(): {
  sidebar: HTMLElement;
  board: HTMLElement;
} {
  const sidebar = document.createElement('aside');
  sidebar.classList.add('sidebar');
  sidebar.textContent = 'Sidebar';

  const board = document.createElement('main');
  board.classList.add('board');
  board.textContent = 'Board';

  return { sidebar, board };
}
