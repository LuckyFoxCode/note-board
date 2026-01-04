export function createdCard() {
  const tags = [
    { id: 't-001', name: 'Work', color: '#ffd166' },
    { id: 't-002', name: 'Home', color: '#38d39f' },
    { id: 't-003', name: 'Family', color: '#56ccf2' },
    { id: 't-004', name: 'Health', color: '#f291b0' },
  ];

  const card = document.createElement('article');
  card.classList.add('nb-note-card');
  card.tabIndex = 1;
  card.dataset.role = 'article';
  card.dataset.noteId = 'n-001';
  card.ariaLabel = 'Note card';

  const header = document.createElement('header');
  header.classList.add('nb-note-card__head');

  const date = document.createElement('span');
  date.classList.add('nb-note-card__head-date');
  date.textContent = '03.01.2026';

  const point = document.createElement('div');
  point.classList.add('nb-note-card__head-pointer');

  const body = document.createElement('div');
  body.classList.add('nb-note-card__body');

  const title = document.createElement('h4');
  title.classList.add('nb-note-card__body-title');
  title.textContent = 'Meeting notes';

  const description = document.createElement('p');
  description.classList.add('nb-note-card__body-description');
  description.textContent =
    '"Notes. Little fragments of thought, anchors in the flow of time. A reminder, an idea, a feeling captured. Essential for navigating the day."';

  const footer = document.createElement('footer');
  footer.classList.add('nb-note-card__meta');

  const tagList = document.createElement('ul');
  tagList.classList.add('nb-note-card__meta-tags');
  tags.forEach((tag) => {
    const tagItem = document.createElement('li');
    tagItem.classList.add('nb-note-card__meta-tag');
    tagItem.textContent = tag.name;
    tagItem.style.backgroundColor = tag.color;
    tagList.append(tagItem);
  });
  footer.append(tagList);

  header.append(point, date);
  body.append(title, description);
  card.append(header, body, footer);

  return card;
}
