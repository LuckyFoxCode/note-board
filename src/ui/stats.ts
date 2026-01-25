import type { NotesStats } from '@/store';

const statsLabels: Record<keyof NotesStats, string> = {
  totalNotes: 'notes',
  totalActiveNotes: 'active',
  totalArchivedNotes: 'archive',
};

export function renderStats(dataStats: NotesStats): HTMLDivElement {
  const stats = document.createElement('div');
  stats.classList.add('nb-board__stats');
  stats.textContent = 'Statistics:';

  const statsList = document.createElement('ul');
  statsList.classList.add('nb-board__stats-list');

  for (const element in dataStats) {
    const statsItem = document.createElement('li');
    statsItem.classList.add('nb-board__stats-item');

    const statsItemTitle = document.createElement('span');
    statsItemTitle.classList.add('nb-board__stats-itemTitle');
    statsItemTitle.textContent = `Total ${statsLabels[element as keyof NotesStats]}: `;

    const statsItemCount = document.createElement('span');
    statsItemCount.classList.add(
      'nb-board__stats-itemCount',
      `nb-board__stats-itemCount--${statsLabels[element as keyof NotesStats]}`,
    );
    statsItemCount.textContent = `${dataStats[element as keyof NotesStats]}`;

    statsItem.append(statsItemTitle, statsItemCount);
    statsList.append(statsItem);
  }

  stats.append(statsList);
  return stats;
}
