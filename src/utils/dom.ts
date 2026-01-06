export function withElement<T extends HTMLElement>(
  el: T | null,
  callback: (el: T) => void,
) {
  if (!el) return;
  callback(el);
}
