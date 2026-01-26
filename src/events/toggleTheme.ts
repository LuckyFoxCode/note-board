import { icons } from '@/assets/icons';
import { createSvgIcon } from '@/utils';

export function bindToggleTheme(btn: HTMLButtonElement) {
  btn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');

    btn.replaceChildren(
      createSvgIcon(isDark ? icons.moonIcon : icons.sunIcon, 'icon-theme'),
    );
  });
}
