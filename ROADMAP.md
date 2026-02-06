🦊 NoteBoard — Roadmap

A step-by-step learning path for building a modular, typed note board application.
Focus: State → Architecture → UX → TypeScript → Vue-ready thinking.

## Phase A — Foundation & Layout (DOM + Structure)

- [x] Step 1 — Project skeleton (Vite / TS / ESLint)
- [x] Step 2 — Base layout (sidebar + board)
- [x] Step 3 — Note card UI (static mock data)
- [x] Step 4 — Category list UI (static)

What you learn:
DOM structure, layout thinking, separation of UI blocks.

## Phase B — TypeScript Domain Model

- [x] Step 5 — Define core types (Note, Category)
- [x] Step 6 — Define AppState interface
- [x] Step 7 — Strict null guards for DOM refs
- [x] Step 8 — HTML form + TS-safe validation

Focus:
Use TypeScript to enforce architecture safety, not just types.

## Phase C — State Management Core

- [x] Step 9 — Central state store (notes, categories, filters)
- [x] Step 10 — Create note
- [x] Step 11 — Update note
- [x] Step 12 — Delete note
- [x] Step 13 — Derived state (filteredNotes, stats)

Concepts:
Single source of truth, immutable updates, derived data.

## Phase D — Rendering & Controllers

- [x] Step 14 — Render notes board
- [x] Step 15 — Render categories sidebar
- [x] Step 16 — Controllers layer (events → state)
- [x] Step 17 — UI re-render strategy (full vs partial)

Key idea:
UI ничего не решает, только отображает.

## Phase E — Filtering, Search & Sorting

- [x] Step 18 — Filter by category
- [x] Step 19 — Search by title & tags
- [x] Step 20 — Archive filter

This mirrors real apps (Notion, Gmail, Trello).

## Phase F — UX Enhancements

- [x] Step 21 — Sorting (date / pinned)
- [x] Step 22 — Pin / unpin notes
- [x] Step 23 — Archive / restore notes
- [x] Step 24 — Modal editor (create/edit)
- [x] Step 25 — Mini statistics panel

Focus: UX-driven state updates.

## Phase G — Persistence Layer

- [x] Step 26 — StorageProvider interface
- [x] Step 27 — localStorage implementation
- [x] Step 28 — Graceful fallback (in-memory)
- [x] Step 29 — Persist filters & UI state

Key concept:
Абстракция → легко заменить API позже.

## Phase J — Finalization & Optional

- [ ] Step 30 — README (architecture explained)
- [x] Step 31 — GitHub Pages / Preview deploy
- [x] Step 32 - Color themes
- [x] Step 33 - accessibility (ARIA roles)

### Optional Stretch Ideas

- Markdown preview in notes
- Virtualized list (performance)
- IndexedDB provider
