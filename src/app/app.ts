import { bindOpenCategoryModal } from '@/events';
import { renderLayout } from '@/ui';

export function initApp() {
  const root = document.querySelector('#app') as HTMLElement;
  if (!root) throw new Error('Root element not found');

  const { sidebar, board, addCategoryBtn } = renderLayout();

  bindOpenCategoryModal(addCategoryBtn);
  root.append(sidebar, board);
}
