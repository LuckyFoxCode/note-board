import type { PersistedState } from './PersistedState';

export interface StorageProvider {
  load(): PersistedState | null;
  save(state: PersistedState): void;
  clear(): void;
}
