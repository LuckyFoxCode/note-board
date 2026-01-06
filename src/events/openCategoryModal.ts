import { renderCategoryForm, renderOverlayWithForm } from '@/ui';
import { bindCategoryFormEvents } from './categoryFormEvents';

export function bindOpenCategoryModal(btn: HTMLButtonElement) {
  btn.addEventListener('click', () => {
    const { form, input } = renderCategoryForm();
    const overlay = renderOverlayWithForm(form);

    bindCategoryFormEvents(form, overlay);
    document.body.append(overlay);
    input.focus();
  });
}
