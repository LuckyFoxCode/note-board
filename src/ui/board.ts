import { getStatsNotes, state, type NotesStats } from '@/store';
import { renderButton } from './button';
import { createdCard } from './card';
import { renderSorting } from './sort';
import { rendeerStats } from './stats';

export function renderBoard(): HTMLElement {
  const { notes, filters } = state.app;

  const data: NotesStats = getStatsNotes(state.app);

  const dataStats = {
    notes: data.totalNotes,
    active: data.totalActiveNotes,
    archive: data.totalArchivedNotes,
  };

  const board = document.createElement('main');
  board.classList.add('nb-board');
  board.dataset.role = 'main';
  board.dataset.mount = 'board';
  board.ariaLabel = 'Board';

  const headerBoard = document.createElement('header');
  headerBoard.classList.add('nb-board__header');

  const titleBoard = document.createElement('h1');
  titleBoard.textContent = 'Welcome to NoteBoard!';

  headerBoard.append(titleBoard);

  const sort = renderSorting();
  const stats = rendeerStats(dataStats);

  const wrapperCard = document.createElement('div');
  wrapperCard.classList.add('nb-board__wrapper-cards');

  let filteredNotes = notes;

  if (state.ui.boardView === 'default')
    filteredNotes = filteredNotes.filter((note) => !note.archived);

  if (state.ui.boardView === 'archive')
    filteredNotes = filteredNotes.filter((note) => note.archived);

  if (filters.categoryId)
    filteredNotes = filteredNotes.filter(
      (n) => n.categoryId === filters.categoryId,
    );

  filteredNotes.forEach((note) => {
    const category = state.app.categories.find(
      (cat) => cat.id === note.categoryId,
    );
    wrapperCard.append(createdCard(note, category?.color ?? '#ccc'));
  });

  const addCardBtn = renderButton({
    action: 'add-card',
    title: 'Add card',
    className: 'nb-board__add-card',
  });
  addCardBtn.style.display = 'none';

  board.append(headerBoard, sort, stats, addCardBtn, wrapperCard);

  return board;
}
