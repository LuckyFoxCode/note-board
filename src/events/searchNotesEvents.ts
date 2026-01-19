import { state } from '@/store';
import { rerender } from '@/ui';

export function bindSearchNotesEvents(
  input: HTMLInputElement,
  overlay: HTMLDivElement,
) {
  input.addEventListener('input', () => {
    state.app.filters = { ...state.app.filters, search: input.value.trim() };
    rerender.notes();
  });

  input.addEventListener('keyup', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      input.value = '';
      state.app.filters = { ...state.app.filters, search: '' };
      rerender.notes();
      overlay.remove();
      return;
    }
  });
}
