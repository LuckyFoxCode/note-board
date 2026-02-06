import { STORAGE_KEY, UI_KEY } from '@/consts';
import { bindBoardEvents, bindSidebarEvents, bindToggleTheme } from '@/events';
import { getLocalStorage, loadWithFallback } from '@/persistence';
import { state } from '@/store';
import type { AppState, UI } from '@/types';
import { initSidebar, renderLayout } from '@/ui';

export function initApp() {
  const root = document.querySelector('#app') as HTMLElement;
  if (!root) throw new Error('Root element not found');

  state.app = loadWithFallback(
    () => getLocalStorage<AppState>(STORAGE_KEY),
    state.app,
  );
  state.ui = loadWithFallback(() => getLocalStorage<UI>(UI_KEY), state.ui);

  document.body.classList.toggle('dark', state.ui.theme === 'dark');

  const { sidebar, board, themeBtn } = renderLayout();

  initSidebar(sidebar);

  bindToggleTheme(themeBtn);
  bindSidebarEvents(sidebar);
  bindBoardEvents(board);

  window.addEventListener('resize', () => initSidebar(sidebar));

  root.append(sidebar, board);
}
