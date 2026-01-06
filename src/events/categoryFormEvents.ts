export function bindCategoryFormEvents(form: HTMLFormElement) {
  form.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();

    const input = document.querySelector<HTMLInputElement>('input');
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

    input.value = '';
  });
}
