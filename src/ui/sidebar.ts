import { createCategory } from './category';

export function renderSidebar(): {
  sidebar: HTMLElement;
  addCategoryBtn: HTMLButtonElement;
} {
  const sidebar = document.createElement('aside');
  sidebar.classList.add('nb-sidebar');
  sidebar.dataset.role = 'navigation';
  sidebar.dataset.mount = 'sidebar';
  sidebar.ariaLabel = 'Navigation';

  const { container: categories, button: addCategoryBtn } = createCategory();

  const themeBtn = document.createElement('button');
  themeBtn.classList.add('nb-theme-btn');
  themeBtn.type = 'button';
  themeBtn.textContent = '☀️';

  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeBtn.textContent =
      document.body.classList.contains('dark') === true ? '🌙' : '☀️';
  });

  sidebar.append(categories, themeBtn);

  return { sidebar, addCategoryBtn };
}
