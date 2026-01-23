import { renderButton } from './button';
import { renderInput } from './input';

export function renderCardForm(): {
  form: HTMLFormElement;
  inputTitle: HTMLInputElement;
} {
  const form = document.createElement('form');
  form.classList.add('nb-form');
  form.ariaLabel = 'Form card';
  form.dataset.type = 'card';

  const inputTitle = renderInput({
    name: 'card-title',
    type: 'text',
    placeholder: 'Edit card title',
  });

  const inputDescription = renderInput({
    name: 'card-description',
    type: 'text',
    placeholder: 'Edit card text',
  });

  const inputTags = renderInput({
    name: 'card-tags',
    type: 'text',
    placeholder: 'Edit card tags',
  });

  const submitBtn = renderButton({
    type: 'submit',
    className: 'nb-form__btn',
    title: 'Submit',
  });

  form.append(inputTitle, inputDescription, inputTags, submitBtn);

  return { form, inputTitle };
}
