import { createSvgIcon } from '@/utils';
import { createCategory } from './category';
import { icons } from '@/assets/icons';

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
  const sunIcon = createSvgIcon(icons.sunIcon, 'icon-sun');

  const themeBtn = document.createElement('button');
  themeBtn.classList.add('nb-theme-btn');
  themeBtn.type = 'button';

  themeBtn.append(sunIcon);
  sidebar.append(categories, themeBtn);

  return { sidebar, themeBtn };
}
