export function renderSearchOverlay(): {
  overlay: HTMLDivElement;
  searchInput: HTMLInputElement;
} {
  const overlay = document.createElement('div');
  overlay.classList.add('nb-search-overlay');

  const searchInput = document.createElement('input');
  searchInput.classList.add('nb-search-overlay__input');
  searchInput.type = 'text';
  searchInput.name = 'search-notes';
  searchInput.placeholder = 'Search notes at title or tag';

  overlay.append(searchInput);

  return { overlay, searchInput };
}
