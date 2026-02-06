import { STORAGE_KEY } from '@/consts';
import { saveLocalStorage } from '@/persistence';
import { state, toggleArchivedNotes, togglePinnedNotes } from '@/store';
import { renderCardForm, renderOverlayWithForm, rerender } from '@/ui';
import { bindCardFormEvents } from './cardFormEvents';

export function bindBoardEvents(root: HTMLElement) {
  root.addEventListener('click', (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    const actionEl = target.closest<HTMLElement>('[data-action]');

    if (!actionEl) return;

    switch (actionEl.dataset.action) {
      case 'add-card': {
        const { form, inputTitle } = renderCardForm();
        const overlay = renderOverlayWithForm(form, 'Add card');

        bindCardFormEvents(form, overlay);
        document.body.append(overlay);
        inputTitle.focus();
        break;
      }
      case 'edit-card': {
        const id = actionEl.dataset.noteId;
        if (!id) return;

        const noteToEdit = state.app.notes.find((note) => note.id === id);
        if (!noteToEdit) return;

        const { form, inputTitle, inputDescription, inputTags } =
          renderCardForm();

        inputTitle.value = noteToEdit.title;
        inputDescription.value = noteToEdit.excerpt;
        inputTags.value = noteToEdit.tags.map((note) => note.name).join(',');

        form.dataset.noteId = id;

        const overlay = renderOverlayWithForm(form, 'Edit card');
        bindCardFormEvents(form, overlay);
        document.body.append(overlay);
        inputTitle.focus();
        break;
      }
      case 'archive-card': {
        const id = actionEl.dataset.noteId;
        if (!id) return;

        state.app = toggleArchivedNotes(state.app, id);
        saveLocalStorage(STORAGE_KEY, state.app);
        rerender.notes();
      }
    }
  });

  root.addEventListener('dblclick', (event: MouseEvent) => {
    const target = event.target as HTMLElement;

    const card = target.closest('.nb-note-card') as HTMLElement | null;
    if (!card) return;

    const id = card.dataset.noteId;
    if (!id) return;

    state.app = togglePinnedNotes(state.app, id);
    saveLocalStorage(STORAGE_KEY, state.app);
    rerender.notes();
  });

  root.addEventListener('change', (event) => {
    const target = event.target as HTMLElement;

    if (target.matches('.nb-sort__select')) {
      const select = target as HTMLSelectElement;
      const value = select.value;

      state.app.filters = {
        ...state.app.filters,
        sortBy: value as 'default' | 'date_desc' | 'date_asc',
      };
      rerender.notes();
    }

    if (target.matches('.nb-sort__pinned-checkbox')) {
      const checkbox = target as HTMLInputElement;
      state.app.filters = {
        ...state.app.filters,
        pinnedOnly: checkbox.checked,
      };
      rerender.notes();
    }
  });
}
