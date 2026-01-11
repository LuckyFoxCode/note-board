import { state } from '@/store';
import { createCategoryItem } from './categoryItem';

export function createCategory(): HTMLDivElement {
  const categories = document.createElement('div');
  categories.classList.add('nb-category');

  const addCategoryBtn = document.createElement('button');
  addCategoryBtn.classList.add('nb-category__btn');
  addCategoryBtn.type = 'button';
  addCategoryBtn.dataset.action = 'add-category';
  addCategoryBtn.textContent = 'Add category';

  const categoryTitle = document.createElement('h2');
  categoryTitle.classList.add('nb-category__title');
  categoryTitle.textContent = 'Category';

  const categoryList = document.createElement('ul');
  categoryList.classList.add('nb-category__list');

  state.app.categories.forEach((cat) => {
    categoryList.appendChild(createCategoryItem(cat));
  });

  categories.append(addCategoryBtn, categoryTitle, categoryList);

  return categories;
}
