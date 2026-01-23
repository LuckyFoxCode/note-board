interface InputProps {
  type: 'text' | 'email' | 'password';
  name: string;
  placeholder: string;
  className?: string;
}

export function renderInput({
  name,
  type,
  className,
  placeholder,
}: InputProps): HTMLInputElement {
  const input = document.createElement('input');
  input.classList.add('nb-form__input');
  input.type = type;
  input.name = name;
  input.autocomplete = 'off';
  input.placeholder = placeholder;

  if (className) input.classList.add(className);

  return input;
}
