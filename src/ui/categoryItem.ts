import { icons } from '@/assets/icons';

import type { Category } from '@/types';
import { createSvgIcon } from '@/utils';

export function createCategoryItem(cat: Category): HTMLLIElement {
  const categoryItem = document.createElement('li');
  categoryItem.classList.add('nb-category__item');
  categoryItem.dataset.id = cat.id;
  categoryItem.tabIndex = 1;

  const itemPoint = document.createElement('span');
  itemPoint.classList.add('nb-category__item-point');
  itemPoint.style.backgroundColor = cat.color;

  const itemWrapper = document.createElement('div');
  itemWrapper.classList.add('nb-category__item-wrapper');

  const itemTitle = document.createElement('span');
  itemTitle.classList.add('nb-category__item-title');
  itemTitle.textContent = cat.title;
  categoryItem.append(itemPoint, itemTitle);

  const removeIcon = createSvgIcon(icons.removeIcon, 'icon-remove');

  const itemRemoveBtn = document.createElement('button');
  itemRemoveBtn.classList.add('nb-category__item-remove');
  itemRemoveBtn.type = 'button';
  itemRemoveBtn.dataset.action = 'remove-category';
  itemRemoveBtn.dataset.id = cat.id;

  itemRemoveBtn.append(removeIcon);
  itemWrapper.append(itemTitle, itemRemoveBtn);
  categoryItem.append(itemWrapper);

  return categoryItem;
}
