import { STORAGE_KEY } from '@/consts';
import { saveLocalStorage } from '@/persistence';
import { addCategory, state } from '@/store';
import { rerender } from '@/ui';

export function bindCategoryFormEvents(
  form: HTMLFormElement,
  overlay: HTMLDivElement,
) {
  form.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();

    const input = form.querySelector<HTMLInputElement>('input');
    if (!input) return;

    const value = input.value.trim();
    if (!value) {
      input.classList.add('input-error');
      console.log('Category cannot be empty');
      return;
    }

    if (value.length > 20) {
      input.classList.add('input-error');
      console.log('Category cannot be more 20 simbols');
      return;
    }

    input.classList.remove('input-error');

    const newCategory = {
      title: value,
    };

    state.app = addCategory(state.app, newCategory);
    saveLocalStorage(STORAGE_KEY, state.app);
    rerender.categories();

    input.value = '';
    overlay.remove();
  });

  form.addEventListener('keyup', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      overlay.remove();
    }
  });
}
