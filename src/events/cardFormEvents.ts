import { addNote, state, updateNote } from '@/store';
import { rerender } from '@/ui';
import { getRandomColor } from '@/utils';

export function bindCardFormEvents(
  form: HTMLFormElement,
  overlay: HTMLDivElement,
) {
  form.addEventListener('submit', (event: SubmitEvent) => {
    event.preventDefault();

    const inputTitle = form.querySelector<HTMLInputElement>(
      '[name="card-title"]',
    );

    const inputDescription = form.querySelector<HTMLInputElement>(
      '[name="card-description"]',
    );

    const inputTags =
      form.querySelector<HTMLInputElement>('[name="card-tags"]');
    if (!inputTitle || !inputDescription || !inputTags) return;

    const tags = inputTags.value
      .trim()
      .split(',')
      .map((tag) => ({
        name: tag,
        color: getRandomColor(),
      }));

    const categoryId: string | null = state.app.filters.categoryId as string;

    if (form.dataset.noteId) {
      const updateCard = {
        id: form.dataset.noteId,
        title: inputTitle.value.trim(),
        excerpt: inputDescription.value.trim(),
        tags,
      };

      state.app = updateNote(state.app, updateCard);
    } else {
      const newCard = {
        title: inputTitle.value.trim(),
        excerpt: inputDescription.value.trim(),
        tags,
        categoryId: categoryId,
      };

      state.app = addNote(state.app, newCard);
    }

    rerender.notes();
    overlay.remove();
  });

  form.addEventListener('keyup', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      overlay.remove();
    }
  });
}
