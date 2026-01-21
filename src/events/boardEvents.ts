import { state } from '@/store';
import { rerender } from '@/ui';

export function bindBoardEvents(root: HTMLElement) {
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
