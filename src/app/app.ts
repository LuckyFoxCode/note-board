import { createLayout, renderModalFormCategory } from '@/ui';

export function initApp() {
  const root = document.querySelector('#app') as HTMLElement;
  if (!root) throw new Error('Root element not found');

  const { sidebar, board } = createLayout();
  const overlay = renderModalFormCategory();

  root.append(overlay, sidebar, board);
}
