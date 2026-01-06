export function renderModalFormCategory(): HTMLDivElement {
  const overlay = document.createElement('div');
  overlay.classList.add('nb-overlay');

  const formCategory = document.createElement('form');
  formCategory.classList.add('nb-form-category');
  formCategory.ariaLabel = 'Form category';
  formCategory.dataset.type = 'category';

  const title = document.createElement('h2');
  title.classList.add('nb-form-category__title');
  title.textContent = 'Add category';

  const input = document.createElement('input');
  input.classList.add('nb-form-category__input');
  input.type = 'text';
  input.placeholder = 'Add category...';

  const submitBtn = document.createElement('button');
  submitBtn.classList.add('nb-form-category__btn');
  submitBtn.type = 'submit';
  submitBtn.textContent = 'Submit';

  formCategory.append(title, input, submitBtn);

  overlay.append(formCategory);

  return overlay;
}
