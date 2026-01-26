import { icons } from '@/assets/icons';
import { createSvgIcon } from '@/utils';
import { renderButton } from './button';
import { createCategory } from './category';

export function renderSidebar(): {
  sidebar: HTMLElement;
  btnTheme: HTMLButtonElement;
} {
  const homeIcon = createSvgIcon(icons.homeIcon, 'icon-home');
  const searchIcon = createSvgIcon(icons.sunIcon, 'icon-search');
  const archiveIcon = createSvgIcon(icons.archiveIcon, 'icon-archive');
  const sunIcon = createSvgIcon(icons.sunIcon, 'icon-theme');

  const sidebar = document.createElement('aside');
  sidebar.classList.add('nb-sidebar');
  sidebar.dataset.role = 'navigation';
  sidebar.dataset.mount = 'sidebar';
  sidebar.ariaLabel = 'Navigation';

  const wrapper = document.createElement('div');
  wrapper.classList.add('nb-sidebar__wrapper');

  const btnHome = renderButton({
    action: 'all-notes',
    className: 'nb-sidebar__wrapper-btn',
    title: 'Home',
    icon: homeIcon,
  });

  const btnSearch = renderButton({
    action: 'search-notes',
    className: 'nb-sidebar__wrapper-btn',
    title: 'Search',
    icon: searchIcon,
  });

  const btnArchived = renderButton({
    action: 'archived-notes',
    className: 'nb-sidebar__wrapper-btn',
    title: 'Archived',
    icon: archiveIcon,
  });

  const categories = createCategory();

  const btnTheme = renderButton({
    action: 'change-theme',
    className: 'nb-theme-btn',
    icon: sunIcon,
  });

  wrapper.append(btnHome, btnSearch, btnArchived);
  sidebar.append(wrapper, categories, btnTheme);

  return { sidebar, btnTheme };
}
