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

- [ ] Step 9 — Central state store (notes, categories, filters)
- [ ] Step 10 — Create note
- [ ] Step 11 — Update note
- [ ] Step 12 — Delete note
- [ ] Step 13 — Derived state (filteredNotes, stats)

Concepts:
Single source of truth, immutable updates, derived data.

## Phase D — Rendering & Controllers

- [ ] Step 14 — Render notes board
- [ ] Step 15 — Render categories sidebar
- [ ] Step 16 — Controllers layer (events → state)
- [ ] Step 17 — UI re-render strategy (full vs partial)

Key idea:
UI ничего не решает, только отображает.

## Phase E — Filtering, Search & Sorting

- [ ] Step 18 — Filter by category
- [ ] Step 19 — Search by title & tags
- [ ] Step 20 — Sorting (date / pinned)
- [ ] Step 21 — Archive filter

This mirrors real apps (Notion, Gmail, Trello).

## Phase F — UX Enhancements

- [ ] Step 22 — Pin / unpin notes
- [ ] Step 23 — Archive / restore notes
- [ ] Step 24 — Modal editor (create/edit)
- [ ] Step 25 — Mini statistics panel

Focus: UX-driven state updates.

## Phase G — Persistence Layer

- [ ] Step 26 — StorageProvider interface
- [ ] Step 27 — localStorage implementation
- [ ] Step 28 — Graceful fallback (in-memory)
- [ ] Step 29 — Persist filters & UI state

Key concept:
Абстракция → легко заменить API позже.

## Phase H — Drag & Drop

- [ ] Step 30 — Drag note card
- [ ] Step 31 — Drop into category
- [ ] Step 32 — Persist category change
- [ ] Step 33 — (Optional) reorder inside category

Important:
DnD = сложное состояние + UX.

## Phase I — Advanced Features (Optional)

- [ ] Step 34 — Undo / Redo (command stack)
- [ ] Step 35 — Export notes to JSON
- [ ] Step 36 — Import JSON
- [ ] Step 37 — Keyboard shortcuts

## Phase J — Finalization & Vue Bridge

- [ ] Step 38 — README (architecture explained)
- [ ] Step 39 — GitHub Pages / Preview deploy
- [ ] Step 40 — Vue mapping doc
      (state → reactive, controllers → composables)

### Optional Stretch Ideas

- Color themes
- Accessibility (ARIA roles)
- Markdown preview in notes
- Virtualized list (performance)
- IndexedDB provider
