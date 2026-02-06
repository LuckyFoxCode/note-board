# 🦊 NoteBoard

A note-taking web app built with **TypeScript** and a **state-driven architecture**.

The project was created as a learning exercise to practice application structure, state management, and modular TypeScript code without frameworks.

---

## ✨ Features

- Create, edit, and delete notes
- Categories and tags
- Search and filtering
- Pin and archive notes
- Sorting by date
- Light and dark theme
- Data persistence with localStorage

---

## 🛠 Tech Stack

- TypeScript
- Vite
- Vanilla DOM
- localStorage

---

## 🧠 Architecture

The app uses a **single state store**.
UI is rendered based on the current state, and all user actions update the state through controllers.

```
User action → Controller → State → Render → DOM update
```

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

---

## 📚 What I Learned

- State-driven UI design
- Separation of logic and rendering
- Working with TypeScript domain models
- Building modular frontend architecture
- Implementing localStorage persistence
