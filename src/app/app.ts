import { bindOpenCategoryModal } from '@/events';
import { addNote, getFilteredNotes, state } from '@/store';
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
    categoryId: '1',
  };

  const data = addNote(state.app, obj);
  const filter = getFilteredNotes(state.app, 'categoryId', '2');

  console.log('--- data ---', data);
  console.log('--- filter ---', filter);
}
