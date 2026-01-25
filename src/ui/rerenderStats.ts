import { getStatsNotes, state } from '@/store';

export function rerenderStats() {
  const data = getStatsNotes(state.app);

  (document.querySelector(
    '.nb-board__stats-itemCount--notes',
  ) as HTMLElement)!.textContent = `${data.totalNotes}`;
  (document.querySelector(
    '.nb-board__stats-itemCount--active',
  ) as HTMLElement)!.textContent = `${data.totalActiveNotes}`;
  (document.querySelector(
    '.nb-board__stats-itemCount--archive',
  ) as HTMLElement)!.textContent = `${data.totalArchivedNotes}`;
}
