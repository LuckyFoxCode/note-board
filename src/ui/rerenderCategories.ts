import { state } from '@/store';
import { withElement } from '@/utils';
import { createCategoryItem } from './categoryItem';

export function rerenderCategories() {
  const sidebar = document.querySelector<HTMLElement>('[data-mount="sidebar"]');

  withElement(sidebar, (sidebarEl) => {
    const list =
      sidebarEl.querySelector<HTMLUListElement>('.nb-category__list');

    withElement(list, (listEl) => {
      listEl.innerHTML = '';

      state.app.categories.forEach((cat) => {
        const item = createCategoryItem(cat);
        listEl.appendChild(item);
      });
    });
  });
}
