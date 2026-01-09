import type { Category } from '@/types';

export function createCategoryItem(cat: Category): HTMLLIElement {
  const categoryItem = document.createElement('li');
  categoryItem.classList.add('nb-category__item');
  categoryItem.dataset.id = cat.id;
  categoryItem.tabIndex = 1;

  const itemPoint = document.createElement('span');
  itemPoint.classList.add('nb-category__item-point');
  itemPoint.style.backgroundColor = cat.color;

  const itemTitle = document.createElement('span');
  itemTitle.classList.add('nb-category__item-title');
  itemTitle.textContent = cat.title;
  categoryItem.append(itemPoint, itemTitle);

  return categoryItem;
}
