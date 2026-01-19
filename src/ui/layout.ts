import { renderSidebar } from './sidebar';
import { renderBoard } from './board';

export function renderLayout(): {
  sidebar: HTMLElement;
  board: HTMLElement;

  themeBtn: HTMLButtonElement;
} {
  const { sidebar, btnTheme: themeBtn } = renderSidebar();
  const board = renderBoard();

  return { sidebar, board, themeBtn };
}
