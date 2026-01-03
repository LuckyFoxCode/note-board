export function createdCard() {
  const card = document.createElement('div');
  card.classList.add('nb-note-card');
  card.dataset.role = 'article';
  card.dataset.id = 'n-001';

  return card;
}
