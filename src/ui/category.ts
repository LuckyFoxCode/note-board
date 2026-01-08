// import { categoriesList } from '@/consts';
import { state } from '@/store';

export function createCategory(): {
  container: HTMLDivElement;
  button: HTMLButtonElement;
} {
  const categories = document.createElement('div');
  categories.classList.add('nb-category');

  const addCategoryBtn = document.createElement('button');
  addCategoryBtn.classList.add('nb-category__btn');
  addCategoryBtn.type = 'button';
  addCategoryBtn.textContent = 'Add category';

  const categoryTitle = document.createElement('h2');
  categoryTitle.classList.add('nb-category__title');
  categoryTitle.textContent = 'Category';

  const categoryList = document.createElement('ul');
  categoryList.classList.add('nb-category__list');

  state.app.categories.forEach((cat) => {
    const categoryItem = document.createElement('li');
    categoryItem.classList.add('nb-category__item');
    categoryItem.dataset.id = cat.title;
    categoryItem.tabIndex = 1;

    const itemPoint = document.createElement('span');
    itemPoint.classList.add('nb-category__item-point');
    itemPoint.style.backgroundColor = cat.color;

    const itemTitle = document.createElement('span');
    itemTitle.classList.add('nb-category__item-title');
    itemTitle.textContent = cat.title;
    categoryItem.append(itemPoint, itemTitle);

    categoryList.appendChild(categoryItem);
  });

  categories.append(addCategoryBtn, categoryTitle, categoryList);

  return { container: categories, button: addCategoryBtn };
}
