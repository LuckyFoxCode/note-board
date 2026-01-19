export function renderSorting(): HTMLElement {
  const sortBy = [
    {
      checked: true,
      value: 'default',
      name: 'Sort by Date',
      disabled: true,
    },
    {
      checked: false,
      value: 'new date',
      name: 'New Date',
      disabled: false,
    },
    {
      checked: false,
      value: 'old date',
      name: 'Old Date',
      disabled: false,
    },
  ];

  const sort = document.createElement('section');
  sort.classList.add('nb-sort');

  const select = document.createElement('select');
  select.classList.add('nb-sort__select');
  select.name = 'sort-notes';

  sortBy.forEach((variant) => {
    const option = document.createElement('option');
    option.classList.add('nb-sort__select-option');
    option.value = variant.value;
    option.textContent = variant.name;
    option.defaultSelected = variant.checked;
    option.disabled = variant.disabled;

    select.append(option);
  });

  const pinned = document.createElement('label');
  pinned.classList.add('nb-sort__pinned');
  pinned.textContent = 'Pinned';

  const pinnedCheckbox = document.createElement('input');
  pinnedCheckbox.classList.add('nb-sort__pinned-checkbox');
  pinnedCheckbox.type = 'checkbox';
  pinnedCheckbox.name = 'pinned-notes';

  const customCheckbox = document.createElement('div');
  customCheckbox.classList.add('nb-sort__pinned-customCheckbox');

  pinned.append(pinnedCheckbox, customCheckbox);
  sort.append(select, pinned);

  return sort;
}
