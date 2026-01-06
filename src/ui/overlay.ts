export function renderOverlayWithForm(form: HTMLFormElement): HTMLDivElement {
  const overlay = document.createElement('div');
  overlay.classList.add('nb-overlay');

  const overlayWrapper = document.createElement('div');
  overlayWrapper.classList.add('nb-overlay__wrapper');

  const title = document.createElement('h2');
  title.classList.add('nb-overlay__wrapper-title');
  title.textContent = 'Add category / note';

  overlayWrapper.append(title, form);
  overlay.append(overlayWrapper);

  return overlay;
}
