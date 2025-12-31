# Claude.md — Nuxt.js Project Instructions

## Project Overview

This is a **Nuxt 4** frontend application for a internship developer documentation.

Primary goals:

- Clean and clear Nuxt.js frontend boilerplate
- Simple markdown content management system
- Document for intern's project base records
- Portfolio of intern's work

---

## Tech Stack

- Nuxt: v4.x
- Vue: v3.x
- UI: @nuxt/ui + Tailwind CSS v4
- Content: @nuxt/content v3 + SQLite (better-sqlite3)

---

## General Rules

- Prefer **clarity over cleverness**
- Follow **Nuxt conventions** unless explicitly instructed otherwise
- Avoid unnecessary abstractions
- Do not introduce new dependencies unless clearly justified

---

## Vue & Nuxt Rules

- Use **Composition API** only
- Use `<script setup>` syntax
- Prefer `defineProps`, `defineEmits`, and composables
- Use `useFetch`, `useAsyncData`, or server routes appropriately

---

## File & Directory Conventions

- Pages go in `/pages`
- Reusable components go in `/components`
- Static files belong in `/public`
- Content files belong in `/content`
  - `about.md` is personal data of intern / trainee for resume
  - `glossary.md` is glossary of new technical term be learned from training process
  - `index.md` content is custom for each intern/training signed condition
  - `installation.md` is general software installation instructions for intern's environment
  - `kh-intern.md` is this project's howto documentation
  - `recruitement.md` is trainee / intern requirements for recruitement process

---

## Development Guildelines

### Initial Setup from scratch

```bash
pnpm create nuxt@latest kh-intern
cd kh-intern
pnpm approve-builds
pnpm add vue @nuxt/ui
pnpm add --save-dev tailwindcss
pnpm install
pnpm dev
```
