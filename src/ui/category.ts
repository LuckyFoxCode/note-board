import { categoriesList } from '@/consts';

export function createCategory(): HTMLDivElement {
  const categories = document.createElement('div');
  categories.classList.add('nb-category');

  const categoryTitle = document.createElement('h2');
  categoryTitle.classList.add('nb-category__title');
  categoryTitle.textContent = 'Category';

  const categoryList = document.createElement('ul');
  categoryList.classList.add('nb-category__list');

  categoriesList.forEach((cat) => {
    const categoryItem = document.createElement('li');
    categoryItem.classList.add('nb-category__item');
    categoryItem.dataset.id = cat.name;
    categoryItem.tabIndex = 1;

    const itemPoint = document.createElement('span');
    itemPoint.classList.add('nb-category__item-point');
    itemPoint.style.backgroundColor = cat.color;

    const itemTitle = document.createElement('span');
    itemTitle.classList.add('nb-category__item-title');
    itemTitle.textContent = cat.name;
    categoryItem.append(itemPoint, itemTitle);

    categoryList.appendChild(categoryItem);
  });

  for (let i = 0; i < 5; i++) {}

  categories.append(categoryTitle, categoryList);

  return categories;
}
