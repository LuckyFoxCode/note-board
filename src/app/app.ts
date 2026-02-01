import { bindBoardEvents, bindSidebarEvents, bindToggleTheme } from '@/events';
import { initSidebar, renderLayout } from '@/ui';

export function initApp() {
  const root = document.querySelector('#app') as HTMLElement;
  if (!root) throw new Error('Root element not found');

  const { sidebar, board, themeBtn } = renderLayout();

  bindToggleTheme(themeBtn);
  bindSidebarEvents(sidebar);
  bindBoardEvents(board);

  window.addEventListener('resize', () => initSidebar(sidebar));

  root.append(sidebar, board);
}
