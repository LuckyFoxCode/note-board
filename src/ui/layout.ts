import { renderSidebar } from './sidebar';
import { renderBoard } from './board';

export function renderLayout(): {
  sidebar: HTMLElement;
  board: HTMLElement;
  addCategoryBtn: HTMLButtonElement;
} {
  const { sidebar, addCategoryBtn } = renderSidebar();
  const board = renderBoard();

  return { sidebar, board, addCategoryBtn };
}
