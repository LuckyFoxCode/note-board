import { createSvgIcon } from '@/utils';
import { createCategory } from './category';
import { icons } from '@/assets/icons';
import { renderButton } from './button';

export function renderSidebar(): {
  sidebar: HTMLElement;
  btnTheme: HTMLButtonElement;
} {
  const homeIcon = createSvgIcon(icons.homeIcon, 'icon-home');
  const archiveIcon = createSvgIcon(icons.archiveIcon, 'icon-archive');
  const sunIcon = createSvgIcon(icons.sunIcon, 'icon-sun');

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

  wrapper.append(btnHome, btnArchived);
  sidebar.append(wrapper, categories, btnTheme);

  return { sidebar, btnTheme };
}
