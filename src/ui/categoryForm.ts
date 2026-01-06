export function renderCategoryForm(): {
  form: HTMLFormElement;
  input: HTMLInputElement;
} {
  const form = document.createElement('form');
  form.classList.add('nb-form-category');
  form.ariaLabel = 'Form category';
  form.dataset.type = 'category';

  const input = document.createElement('input');
  input.classList.add('nb-form-category__input');
  input.type = 'text';
  input.name = 'category';
  input.autocomplete = 'off';
  input.placeholder = 'Add category...';

  const submitBtn = document.createElement('button');
  submitBtn.classList.add('nb-form-category__btn');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Submit';

  form.append(input, submitBtn);

  return { form, input };
}
