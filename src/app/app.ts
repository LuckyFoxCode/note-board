import { bindBoardEvents, bindSidebarEvents, bindToggleTheme } from '@/events';
import { renderLayout } from '@/ui';

export function initApp() {
  const root = document.querySelector('#app') as HTMLElement;
  if (!root) throw new Error('Root element not found');

  const { sidebar, board, themeBtn } = renderLayout();

  bindToggleTheme(themeBtn);
  bindSidebarEvents(sidebar);
  bindBoardEvents(board);

  root.append(sidebar, board);
}
