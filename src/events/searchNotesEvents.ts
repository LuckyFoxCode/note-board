import { state } from '@/store';
import { rerender } from '@/ui';

export function bindSearchNotesEvents(
  input: HTMLInputElement,
  overlay: HTMLDivElement,
) {
  input.addEventListener('keydown', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      input.value = '';
      state.app.filters = { ...state.app.filters, search: '' };
      rerender.notes();
      overlay.remove();
      return;
    }

    state.app.filters = { ...state.app.filters, search: input.value.trim() };
    console.log(
      '===searchNotesEvents===',
      input.value,
      state.app.filters.search,
    );
    rerender.notes();
  });
}
