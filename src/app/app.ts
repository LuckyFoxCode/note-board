import { STORAGE_KEY, UI_KEY } from '@/consts';
import { bindBoardEvents, bindSidebarEvents, bindToggleTheme } from '@/events';
import { getLocalStorage } from '@/persistence';
import { state } from '@/store';
import type { AppState, UI } from '@/types';
import { initSidebar, renderLayout } from '@/ui';

export function initApp() {
  const root = document.querySelector('#app') as HTMLElement;
  if (!root) throw new Error('Root element not found');

  const dataState = getLocalStorage<AppState>(STORAGE_KEY) as AppState;
  const dataUI = getLocalStorage<UI>(UI_KEY) as UI;

  state.app = dataState;
  state.ui = dataUI;

  if (state.ui.theme === 'dark') {
    document.body.classList.add('dark');
  }

  if (state.ui.theme === 'light') {
    document.body.classList.remove('dark');
  }

  const { sidebar, board, themeBtn } = renderLayout();

  initSidebar(sidebar);

  bindToggleTheme(themeBtn);
  bindSidebarEvents(sidebar);
  bindBoardEvents(board);

  window.addEventListener('resize', () => initSidebar(sidebar));

  root.append(sidebar, board);
}
