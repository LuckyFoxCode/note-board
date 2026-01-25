export function renderOverlayWithForm(
  form: HTMLFormElement,
  title: string,
): HTMLDivElement {
  const overlay = document.createElement('div');
  overlay.classList.add('nb-overlay');

  const overlayWrapper = document.createElement('div');
  overlayWrapper.classList.add('nb-overlay__wrapper');

  const overlayTitle = document.createElement('h2');
  overlayTitle.classList.add('nb-overlay__wrapper-title');
  overlayTitle.textContent = title;

  overlayWrapper.append(overlayTitle, form);
  overlay.append(overlayWrapper);

  return overlay;
}
