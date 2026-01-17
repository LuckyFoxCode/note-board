import { state } from '@/store';
import { createCategoryItem } from './categoryItem';
import { createSvgIcon } from '@/utils';
import { icons } from '@/assets/icons';
import { renderButton } from './button';

export function createCategory(): HTMLDivElement {
  const categories = document.createElement('div');
  categories.classList.add('nb-category');

  const addBtnIcon = createSvgIcon(icons.addIcon, 'icon-add');

  const addCategoryBtn = renderButton({
    action: 'add-category',
    className: 'nb-category__btn',
    icon: addBtnIcon,
    title: 'Add category',
  });

  const categoryWrapper = document.createElement('div');
  categoryWrapper.classList.add('nb-category__wrapper');

  const iconTitle = createSvgIcon(icons.folderIcon, 'icon-title');

  const categoryTitle = document.createElement('h2');
  categoryTitle.classList.add('nb-category__wrapper-title');
  categoryTitle.textContent = 'Category';

  const categoryList = document.createElement('ul');
  categoryList.classList.add('nb-category__list');

  state.app.categories.forEach((cat) => {
    categoryList.appendChild(createCategoryItem(cat));
  });

  categoryWrapper.append(iconTitle, categoryTitle);
  categories.append(addCategoryBtn, categoryWrapper, categoryList);

  return categories;
}
