export function rendeerStats(dataStats): HTMLDivElement {
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
    statsItemTitle.textContent = `Total ${element}: `;

    const statsItemCount = document.createElement('span');
    statsItemCount.classList.add('nb-board__stats-itemCount');
    statsItemCount.textContent = `${dataStats[element]}`;

    statsItem.append(statsItemTitle, statsItemCount);
    statsList.append(statsItem);
  }

  stats.append(statsList);
  return stats;
}
