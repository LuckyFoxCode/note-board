import { state, toggleArchivedNotes, togglePinnedNotes } from '@/store';
import { rerender } from '@/ui';

export function bindBoardEvents(root: HTMLElement) {
  root.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    const archiveIcon = target.closest(
      '.icon-archived',
    ) as SVGSVGElement | null;
    if (!archiveIcon) return;

    const id = archiveIcon.dataset.noteId;
    if (!id) return;

    state.app = toggleArchivedNotes(state.app, id);
    rerender.notes();
  });
  root.addEventListener('dblclick', (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    const card = target.closest('.nb-note-card') as HTMLElement | null;
    if (!card) return;

    const id = card.dataset.noteId;
    if (!id) return;

    state.app = togglePinnedNotes(state.app, id);
    rerender.notes();
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
