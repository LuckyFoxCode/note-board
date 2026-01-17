interface ButtonProps {
  id?: string;
  title?: string;
  icon?: SVGSVGElement;
  action?: string;
  className?: string;
  type?: 'button' | 'reset' | 'submit';
}

export function renderButton({
  id,
  icon,
  title,
  action,
  className,
  type = 'button',
}: ButtonProps): HTMLButtonElement {
  const button = document.createElement('button');
  button.classList.add('button');
  button.type = type;
  button.dataset.id = id;

  const titleBtn = document.createElement('span');
  titleBtn.classList.add('button__title');

  if (action) button.dataset.action = action;
  if (className) button.classList.add(className);
  if (icon) button.append(icon);

  if (title) {
    titleBtn.textContent = title;
    button.append(titleBtn);
  }

  return button;
}
