export function loadWithFallback<T>(loadFn: () => T | null, fallback: T): T {
  try {
    const data = loadFn();
    return data ?? fallback;
  } catch {
    return fallback;
  }
}
