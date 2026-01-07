import { bindOpenCategoryModal } from '@/events';
import { createNote, state } from '@/store';
import { renderLayout } from '@/ui';

export function initApp() {
  const root = document.querySelector('#app') as HTMLElement;
  if (!root) throw new Error('Root element not found');

  const { sidebar, board, addCategoryBtn } = renderLayout();

  bindOpenCategoryModal(addCategoryBtn);
  root.append(sidebar, board);

  const obj = {
    title: '111',
    excerpt: 'asd',
    tags: [{ name: '1', color: '1' }],
    categoryId: '',
  };

  const data = createNote(state.app, obj);

  console.log(data);
}
