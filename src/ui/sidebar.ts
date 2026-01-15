import { createSvgIcon } from '@/utils';
import { createCategory } from './category';
import { icons } from '@/assets/icons';

export function renderSidebar(): {
  sidebar: HTMLElement;
  themeBtn: HTMLButtonElement;
} {
  const homeIcon = createSvgIcon(icons.homeIcon, 'icon-home');
  const sunIcon = createSvgIcon(icons.sunIcon, 'icon-sun');

  const sidebar = document.createElement('aside');
  sidebar.classList.add('nb-sidebar');
  sidebar.dataset.role = 'navigation';
  sidebar.dataset.mount = 'sidebar';
  sidebar.ariaLabel = 'Navigation';

  const wrapper = document.createElement('div');
  wrapper.classList.add('nb-sidebar__wrapper');

  const btnHome = document.createElement('button');
  btnHome.classList.add('nb-sidebar__wrapper-btn_home');
  btnHome.type = 'button';
  btnHome.dataset.action = 'all-notes';

  const btnTitle = document.createElement('span');
  btnTitle.textContent = 'Home';

  const categories = createCategory();

  const themeBtn = document.createElement('button');
  themeBtn.classList.add('nb-theme-btn');
  themeBtn.type = 'button';

  wrapper.append(btnHome);
  btnHome.append(homeIcon, btnTitle);
  themeBtn.append(sunIcon);
  sidebar.append(wrapper, categories, themeBtn);

  return { sidebar, themeBtn };
}
