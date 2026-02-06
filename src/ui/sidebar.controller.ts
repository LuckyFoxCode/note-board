import { state } from '@/store';

function isDesktop() {
  return window.matchMedia('(min-width: 1024px)').matches;
}

export function initSidebar(sidebar: HTMLElement) {
  if (isDesktop()) {
    sidebar.classList.toggle('is-open', state.ui.isOpenSidebar);
  } else {
    sidebar.classList.remove('is-open');
  }
}

export function toggleSidebar(sidebar: HTMLElement) {
  if (!isDesktop()) {
    sidebar.classList.toggle('is-open');
    return;
  }

  state.ui.isOpenSidebar = !state.ui.isOpenSidebar;
  sidebar.classList.toggle('is-open', state.ui.isOpenSidebar);
}
