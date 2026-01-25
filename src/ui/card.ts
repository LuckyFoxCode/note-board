import { icons } from '@/assets/icons';
import { state } from '@/store';
import type { Note } from '@/types';
import { createSvgIcon } from '@/utils';

export function createdCard(note: Note, categoryColor: string) {
  const {
    id,
    createdAt,
    title: titleNote,
    excerpt,
    tags,
    pinned,
    archived,
  } = note;

  const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  const card = document.createElement('article');
  card.classList.add('nb-note-card');
  card.tabIndex = 1;
  card.dataset.role = 'article';
  card.dataset.noteId = id;
  card.ariaLabel = 'Note card';

  const header = document.createElement('header');
  header.classList.add('nb-note-card__head');

  const point = document.createElement('div');
  point.classList.add('nb-note-card__head-pointer');
  point.style.backgroundColor = categoryColor;

  const date = document.createElement('span');
  date.classList.add('nb-note-card__head-date');
  date.textContent = formattedDate;

  const archivedIcon = createSvgIcon(icons.archiveIcon, 'icon-archived');
  archivedIcon.dataset.noteId = id;
  archivedIcon.dataset.action = 'archive-card';
  archived ? (archivedIcon.style.color = '#f291b0') : '';

  const pinnedIcon = createSvgIcon(icons.pinnedIcon, 'icon-pinned');

  const body = document.createElement('div');
  body.classList.add('nb-note-card__body');

  const title = document.createElement('h4');
  title.classList.add('nb-note-card__body-title');
  title.textContent = titleNote;

  const description = document.createElement('p');
  description.classList.add('nb-note-card__body-description');
  description.textContent = excerpt;

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

  if (state.app.filters.categoryId) {
    const editIcon = createSvgIcon(icons.editIcon, 'icon-edit');
    editIcon.dataset.noteId = note.id;
    editIcon.dataset.action = 'edit-card';
    header.append(editIcon);
  }

  header.append(archivedIcon);
  pinned && header.append(pinnedIcon);
  body.append(title, description);
  card.append(header, body, footer);

  return card;
}
