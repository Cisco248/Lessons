# TypeScript for Everyone

A structured **TypeScript learning repository** with hands-on lesson files, examples, and a browser use-case project. Each topic folder includes `.ts` lessons and a `readme.md` index.

---

## Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
- [Lessons](#lessons)
- [Project Structure](#project-structure)
- [Running Lessons](#running-lessons)
- [License](#license)

---

## About

This course covers TypeScript fundamentals:

- Variables, types, and type safety
- Objects, interfaces, tuples, and unions
- Functions, enums, generics, and classes
- A practical browser demo (use case)

---

## Getting Started

### Requirements

- [Node.js](https://nodejs.org/) (includes npm)

### Run a lesson file

```bash
npx ts-node "3. Fundation of Typescript/variables/number.ts"
```

### Run the browser use case

```bash
cd "3. Fundation of Typescript/use case"
npx tsc
# Open index.html in your browser
```

---

## Lessons

| Topic | Folder | Readme |
|-------|--------|--------|
| Variables | [variables](./variables/) | [readme](./variables/readme.md) |
| Arrays | [arrays](./arrays/) | [readme](./arrays/readme.md) |
| Tuples | [tuples](./tuples/) | [readme](./tuples/readme.md) |
| Objects | [objects](./objects/) | [readme](./objects/readme.md) |
| Interfaces | [interfaces](./interfaces/) | [readme](./interfaces/readme.md) |
| Types | [types](./types/) | [readme](./types/readme.md) |
| Unions | [unions](./unions/) | [readme](./unions/readme.md) |
| Enums | [enums](./enums/) | [readme](./enums/readme.md) |
| Functions | [functions](./functions/) | [readme](./functions/readme.md) |
| Generics | [generics](./generics/) | [readme](./generics/readme.md) |
| Classes | [classes](./classes/) | [readme](./classes/readme.md) |
| Use Case | [use case](./use%20case/) | [readme](./use%20case/readme.md) |

---

## Project Structure

```
3. Fundation of Typescript/
├── readme.md
├── variables/          # let, const, string, number, boolean
├── arrays/             # Array methods by type
├── tuples/             # Fixed-length typed arrays
├── objects/            # Object types, methods, calls
├── interfaces/         # Interface definitions & extends
├── types/              # Type aliases & intersections
├── unions/             # Union types & narrowing
├── enums/              # Numeric, string, const enums
├── functions/          # Traditional & arrow functions
├── generics/           # Generic functions, classes, utilities
├── classes/            # OOP: public, private, protected, abstract
└── use case/           # Browser demo (HTML + TS)
```

---

## Running Lessons

**Single file:**

```bash
npx ts-node "3. Fundation of Typescript/interfaces/basic Interfaces.ts"
```

**Type-check without running:**

```bash
npx tsc --noEmit "3. Fundation of Typescript/unions/basic union.ts"
```

---

## Learning path (recommended order)

1. Variables → Types → Objects → Interfaces
2. Functions → Unions → Tuples → Arrays
3. Enums → Classes → Generics
4. Use Case (apply basics in browser)

---

## Code example

```ts
interface User {
  name: string;
  age: number;
}

function greet(user: User): string {
  return `Hello, ${user.name}`;
}

const user: User = { name: "Lahiru", age: 25 };
console.log(greet(user));
```

---

## License

MIT License — free for tutorials, courses, and personal learning.
