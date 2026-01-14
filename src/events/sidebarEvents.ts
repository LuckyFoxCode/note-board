import { renderCategoryForm, renderOverlayWithForm, rerender } from '@/ui';
import { bindCategoryFormEvents } from './categoryFormEvents';
import { removeCategory, state } from '@/store';
import { setActive } from '@/utils';

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
        rerender.notes();
        break;
      }
      case 'filter-category': {
        const id = actionEl.dataset.id;
        if (!id) return;

        const categoryItem = actionEl.closest<HTMLLIElement>('li');
        if (!categoryItem) return;

        setActive(root, categoryItem);
        state.app.filters = { ...state.app.filters, categoryId: id };
        rerender.notes();
        break;
      }
      case 'all-notes': {
        setActive(root, actionEl);
        state.app.filters = { ...state.app.filters, categoryId: null };
        rerender.notes();
        break;
      }
    }
  });
}
