export function bindSearchNotesEvents(
  input: HTMLInputElement,
  overlay: HTMLDivElement,
) {
  input.addEventListener('keydown', (event: KeyboardEvent) => {
    const value = input.value;

    if (event.key === 'Escape') {
      input.value = '';
      overlay.remove();
      return;
    }
  });
}
