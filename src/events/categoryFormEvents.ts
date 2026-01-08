import { COLORS_CATEGORIES } from '@/consts';
import { state } from '@/store';

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
    console.log('Category Submitted', value);

    const colorLenght = Object.values(COLORS_CATEGORIES).length;

    const randomColor =
      Object.values(COLORS_CATEGORIES)[Math.floor(Math.random() * colorLenght)];

    const newCategory = {
      id: crypto.randomUUID(),
      title: value,
      color: randomColor,
    };

    state.app.categories.push(newCategory);

    console.log(newCategory);

    input.value = '';
    overlay.remove();
  });
}
