import { state, togglePinnedNotes } from '@/store';
import { rerender } from '@/ui';

export function bindBoardEvents(root: HTMLElement) {
  root.addEventListener('dblclick', (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    if (target.matches('.nb-note-card')) {
      const id = target.dataset.noteId;
      if (!id) return;

      state.app = togglePinnedNotes(state.app, id);
      rerender.notes();
    }
  });

  root.addEventListener('change', (event) => {
    const target = event.target as HTMLElement;

    if (target.matches('.nb-sort__select')) {
      const select = target as HTMLSelectElement;
      const value = select.value;

      state.app.filters = {
        ...state.app.filters,
        sortBy: value as 'default' | 'date_desc' | 'date_asc',
      };
      rerender.notes();
    }

    if (target.matches('.nb-sort__pinned-checkbox')) {
      const checkbox = target as HTMLInputElement;
      state.app.filters = {
        ...state.app.filters,
        pinnedOnly: checkbox.checked,
      };
      rerender.notes();
    }
  });
}
