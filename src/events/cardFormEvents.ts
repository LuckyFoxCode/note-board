import { addNote, state } from '@/store';
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
    if (!inputTitle) return;

    const inputDescription = form.querySelector<HTMLInputElement>(
      '[name="card-description"]',
    );
    if (!inputDescription) return;

    const inputTags =
      form.querySelector<HTMLInputElement>('[name="card-tags"]');
    if (!inputTags) return;

    const tags = inputTags.value
      .trim()
      .split(',')
      .map((tag) => ({
        name: tag,
        color: getRandomColor(),
      }));

    const categoryId: string | null = state.app.filters.categoryId as string;

    const newCard = {
      title: inputTitle.value.trim(),
      excerpt: inputDescription.value.trim(),
      tags,
      categoryId: categoryId,
    };

    state.app = addNote(state.app, newCard);
    rerender.notes();
    overlay.remove();
  });

  form.addEventListener('keyup', (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      overlay.remove();
    }
  });
}
