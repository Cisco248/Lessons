# TypeScript Use Case — Browser Demo

A small **HTML + TypeScript** project that demonstrates `string`, `number`, and `boolean` in the browser.

---

## Project structure

```
use case/
├── index.html       ← Page layout
├── src/
│   └── index.ts     ← TypeScript source
├── dist/
│   └── index.js     ← Compiled output (after build)
├── tsconfig.json
└── readme.md
```

---

## What it does

1. Styles the page title and subtitles
2. Uses typed variables: `string`, `number`, `boolean`
3. Updates each `<h3>` with live demo output

---

## Run locally

```bash
cd "3. Fundation of Typescript/use case"

# Compile TypeScript
npx tsc

# Open index.html in a browser (or use Live Server)
# Ensure dist/index.js exists before opening
```

Or watch mode:

```bash
npx tsc --watch
```

---

## Related lessons

- [Variables — string](../variables/string.ts)
- [Variables — number](../variables/number.ts)
- [Variables — boolean](../variables/boolean.ts)
