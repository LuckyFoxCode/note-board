import { state } from '@/store';
import { createCategoryItem } from './categoryItem';
import { createSvgIcon } from '@/utils';
import { icons } from '@/assets/icons';

export function createCategory(): HTMLDivElement {
  const categories = document.createElement('div');
  categories.classList.add('nb-category');

  const addBtnIcon = createSvgIcon(icons.addIcon, 'icon-add');

  const titleBtn = document.createElement('span');
  titleBtn.textContent = 'Add category';

  const addCategoryBtn = document.createElement('button');
  addCategoryBtn.classList.add('nb-category__btn');
  addCategoryBtn.type = 'button';
  addCategoryBtn.dataset.action = 'add-category';

  const categoryTitle = document.createElement('h2');
  categoryTitle.classList.add('nb-category__title');
  // categoryTitle.textContent = 'Category';
  const iconTitle = createSvgIcon(icons.folderIcon, 'icon-title');
  categoryTitle.append(iconTitle);

  const categoryList = document.createElement('ul');
  categoryList.classList.add('nb-category__list');

  state.app.categories.forEach((cat) => {
    categoryList.appendChild(createCategoryItem(cat));
  });

  addCategoryBtn.append(addBtnIcon);
  state.ui.isOpenSidebar && addCategoryBtn.append(titleBtn);
  categories.append(addCategoryBtn, categoryTitle, categoryList);

  return categories;
}
