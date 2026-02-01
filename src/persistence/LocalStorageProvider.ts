export function saveLocalStorage<T>(key: string, state: T): void {
  const serialize = JSON.stringify(state);

  localStorage.setItem(key, serialize);
}

export function getLocalStorage<T>(key: string): T | null {
  return JSON.parse(localStorage.getItem(key) as string);
}
