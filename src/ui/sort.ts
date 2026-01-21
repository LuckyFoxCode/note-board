export function renderSorting(): HTMLElement {
  type SortOption = {
    value: 'default' | 'date_desc' | 'date_asc';
    label: string;
    disabled?: boolean;
    selected?: boolean;
  };

  const SORT_OPTIONS: SortOption[] = [
    {
      value: 'default',
      label: 'Default order',
      disabled: true,
      selected: true,
    },
    {
      value: 'date_desc',
      label: 'Newest first',
    },
    {
      value: 'date_asc',
      label: 'Oldest first',
    },
  ];

  const sort = document.createElement('section');
  sort.classList.add('nb-sort');

  const select = document.createElement('select');
  select.classList.add('nb-sort__select');
  select.name = 'sort-notes';
  select.dataset.action = 'sort-date';
  select.setAttribute('aria-label', 'Sort notes by date');

  SORT_OPTIONS.forEach((variant) => {
    const option = document.createElement('option');
    option.classList.add('nb-sort__select-option');
    option.value = variant.value;
    option.textContent = variant.label;

    if (variant.selected) {
      option.defaultSelected = true;
      option.disabled = true;
    }

    select.append(option);
  });

  const pinned = document.createElement('label');
  pinned.classList.add('nb-sort__pinned');
  pinned.textContent = 'Pinned';

  const pinnedCheckbox = document.createElement('input');
  pinnedCheckbox.classList.add('nb-sort__pinned-checkbox');
  pinnedCheckbox.type = 'checkbox';
  pinnedCheckbox.name = 'pinned-notes';
  pinnedCheckbox.id = 'pinned-only';

  const customCheckbox = document.createElement('div');
  customCheckbox.classList.add('nb-sort__pinned-customCheckbox');
  customCheckbox.setAttribute('aria-hidden', 'true');

  pinned.append(pinnedCheckbox, customCheckbox);
  sort.append(select, pinned);

  return sort;
}
