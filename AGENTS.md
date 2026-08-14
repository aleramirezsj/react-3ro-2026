# Repository Guide

## App and Commands

- This repository contains one npm package: `ToDoApp/`. Run all package commands from that directory.
- Use `npm ci` for a clean install; `package-lock.json` is the dependency lockfile.
- `npm run dev` starts Vite, `npm run lint` runs Oxlint, and `npm run build` runs `tsc -b` before the Vite production build. There is no test script or test configuration.
- React Compiler is enabled through the Babel preset in `ToDoApp/vite.config.ts`; keep React code compatible with it.

## Application Wiring

- The browser entrypoint is `ToDoApp/src/main.tsx`; the application component tree lives in `ToDoApp/src/Components/`, with component-local CSS files.
- Todo state and operations are owned by `Components/TodoContext/TodoContext.tsx`. Its consumers use a non-null context assertion, so render them below `TodoProvider`. The current `main.tsx` does not wrap `App` in that provider.
- Todos are identified by their `texto` value for React keys and the complete/delete operations. Avoid duplicate task text unless that identity model is changed consistently.
- `Components/Modal/Modal.tsx` portals into `#modal`, which is defined in `ToDoApp/index.html`; preserve that element if changing the HTML shell.

## TypeScript and Linting

- TypeScript is strict about unused locals and parameters (`noUnusedLocals` and `noUnusedParameters`), and `tsconfig.app.json` only includes `src/`.
- Oxlint enables React Hooks rules and warns when a module exports non-component values alongside React components.
