import { state } from '@/store';
import { rerender } from '@/ui';

export function bindBoardEvents(root: HTMLElement) {
  root.addEventListener('change', (event) => {
    const target = event.target as HTMLSelectElement;

    if (target.matches('.nb-sort__select')) {
      const value = target.value;

      state.app.filters = {
        ...state.app.filters,
        sortBy: value as 'default' | 'date_desc' | 'date_asc',
      };
    }
    rerender.notes();
  });
}
