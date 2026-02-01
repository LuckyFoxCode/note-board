import { icons } from '@/assets/icons';
import { UI_KEY } from '@/consts';
import { saveLocalStorage } from '@/persistence';
import { state } from '@/store';
import { createSvgIcon } from '@/utils';

export function bindToggleTheme(btn: HTMLButtonElement) {
  btn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark');

    state.ui.theme = isDark ? 'dark' : 'light';
    saveLocalStorage(UI_KEY, state.ui);

    btn.replaceChildren(
      createSvgIcon(isDark ? icons.moonIcon : icons.sunIcon, 'icon-theme'),
    );
  });
}
