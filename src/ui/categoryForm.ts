import { renderButton } from './button';
import { renderInput } from './input';

export function renderCategoryForm(): {
  form: HTMLFormElement;
  input: HTMLInputElement;
} {
  const form = document.createElement('form');
  form.classList.add('nb-form');
  form.ariaLabel = 'Form category';
  form.dataset.type = 'category';

  const input = renderInput({
    type: 'text',
    name: 'category',
    placeholder: 'Edit category name',
  });

  const submitBtn = renderButton({
    className: 'nb-form__btn',
    type: 'submit',
    title: 'Submit',
  });

  form.append(input, submitBtn);

  return { form, input };
}
