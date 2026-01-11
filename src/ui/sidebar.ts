import { createCategory } from './category';

export function renderSidebar(): {
  sidebar: HTMLElement;

  themeBtn: HTMLButtonElement;
} {
  const sidebar = document.createElement('aside');
  sidebar.classList.add('nb-sidebar');
  sidebar.dataset.role = 'navigation';
  sidebar.dataset.mount = 'sidebar';
  sidebar.ariaLabel = 'Navigation';

  const categories = createCategory();

  const themeBtn = document.createElement('button');
  themeBtn.classList.add('nb-theme-btn');
  themeBtn.type = 'button';
  themeBtn.textContent = '☀️';

  sidebar.append(categories, themeBtn);

  return { sidebar, themeBtn };
}
