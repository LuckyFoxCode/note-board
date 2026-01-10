import { removeCategory, state } from '@/store';
import { rerenderCategories } from '@/ui';

export function bindRemoveCategory(btn: HTMLButtonElement) {
  btn.addEventListener('click', () => {
    state.app = removeCategory(state.app, '1');
    rerenderCategories();
  });
}
