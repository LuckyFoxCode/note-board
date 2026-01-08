import { renderSidebar } from './sidebar';
import { renderBoard } from './board';

export function renderLayout(): {
  sidebar: HTMLElement;
  board: HTMLElement;
  addCategoryBtn: HTMLButtonElement;
  themeBtn: HTMLButtonElement;
} {
  const { sidebar, addCategoryBtn, themeBtn } = renderSidebar();
  const board = renderBoard();

  return { sidebar, board, addCategoryBtn, themeBtn };
}
