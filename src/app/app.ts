import { createdCard, createLayout } from '@/ui';

export function initApp() {
  const root = document.querySelector('#app') as HTMLElement;
  if (!root) throw new Error('Root element not found');

  const { sidebar, board } = createLayout();

  root.append(sidebar, board);

  for (let i = 0; i < 6; i++) {
    const card = createdCard();
    board.append(card);
  }
}
