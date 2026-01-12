import { renderCategoryForm, renderOverlayWithForm, rerender } from '@/ui';
import { bindCategoryFormEvents } from './categoryFormEvents';
import { removeCategory, state } from '@/store';

export function bindSidebarEvents(root: HTMLElement) {
  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;

    const actionEl = target.closest<HTMLElement>('[data-action]');

    if (!actionEl) return;

    switch (actionEl.dataset.action) {
      case 'add-category': {
        const { form, input } = renderCategoryForm();
        const overlay = renderOverlayWithForm(form);

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
        break;
      }
      case 'filter-category': {
        const id = actionEl.dataset.id;
        if (!id) return;
        console.log(state.app.filters, 'first', state.app.notes);

        state.app.filters = { ...state.app.filters, categoryId: id };
        rerender.notes();

        console.log(state.app.filters, 'second', state.app.notes);

        break;
      }
    }
  });
}
