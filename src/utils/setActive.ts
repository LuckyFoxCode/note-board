export function setActive(root: HTMLElement, activeEl: HTMLElement) {
  root.querySelectorAll('.active').forEach((el) => {
    el.classList.remove('active');
  });

  activeEl.classList.add('active');
}
