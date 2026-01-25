import { removeCategory, state } from '@/store';
import {
  renderCategoryForm,
  renderOverlayWithForm,
  renderSearchOverlay,
  rerender,
} from '@/ui';
import { setActive } from '@/utils';
import { bindCategoryFormEvents } from './categoryFormEvents';
import { bindSearchNotesEvents } from './searchNotesEvents';

export function bindSidebarEvents(root: HTMLElement) {
  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    const actionEl = target.closest<HTMLElement>('[data-action]');

    if (!actionEl) return;

    switch (actionEl.dataset.action) {
      case 'all-notes': {
        setActive(root, actionEl);
        state.app.filters = {
          ...state.app.filters,
          categoryId: null,
          archived: false,
        };
        state.ui.boardView = 'default';
        rerender.notes();
        break;
      }
      case 'search-notes': {
        setActive(root, actionEl);
        const { overlay, searchInput } = renderSearchOverlay();

        bindSearchNotesEvents(searchInput, overlay);
        document.body.append(overlay);
        searchInput.focus();
        break;
      }
      case 'archived-notes': {
        setActive(root, actionEl);
        state.app.filters = { ...state.app.filters, archived: true };
        state.ui.boardView = 'archive';
        rerender.notes();
        break;
      }
      case 'add-category': {
        const { form, input } = renderCategoryForm();
        const overlay = renderOverlayWithForm(form, 'Add category');

        bindCategoryFormEvents(form, overlay);
        document.body.append(overlay);
        input.focus();
        break;
      }
      case 'remove-category': {
        const id = actionEl.dataset.id;
        if (!id) return;

        state.app = removeCategory(state.app, id);
        rerender.categories();
        rerender.notes();
        break;
      }
      case 'filter-category': {
        const id = actionEl.dataset.id;
        if (!id) return;

        const categoryItem = actionEl.closest<HTMLLIElement>('li');
        if (!categoryItem) return;

        setActive(root, categoryItem);
        state.app.filters = {
          ...state.app.filters,
          categoryId: id,
          archived: false,
        };
        state.ui.boardView = 'default';
        rerender.notes();
        break;
      }
    }
  });
}
