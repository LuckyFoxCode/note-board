import { bindCategoryFormEvents } from '@/events';
import { renderLayout, renderCategoryForm, renderOverlayWithForm } from '@/ui';

export function initApp() {
  const root = document.querySelector('#app') as HTMLElement;
  if (!root) throw new Error('Root element not found');

  const { sidebar, board } = renderLayout();
  const categoryForm = renderCategoryForm();
  const overlay = renderOverlayWithForm(categoryForm);

  bindCategoryFormEvents(categoryForm);

  root.append(overlay, sidebar, board);
}
