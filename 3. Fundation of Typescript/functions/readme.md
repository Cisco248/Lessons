# Understanding Functions in TypeScript

Functions are the building blocks of logic in TypeScript. This folder covers **traditional functions**, **arrow functions**, **parameters**, **return types**, **generics**, **callbacks**, and **async/await**.

---

## Lesson files

### Traditional functions

| File | Topic |
|------|--------|
| [simple function.ts](./traditional%20function/simple%20function.ts) | Basic declarations |
| [regular function.ts](./traditional%20function/regular%20function.ts) | Hoisting & function references |
| [function expression.ts](./traditional%20function/function%20expression.ts) | Functions assigned to variables |
| [function with params.ts](./traditional%20function/function%20with%20params.ts) | Required & typed parameters |
| [optional default params.ts](./traditional%20function/optional%20default%20params.ts) | Optional (`?`) & default values |
| [rest parameters.ts](./traditional%20function/rest%20parameters.ts) | Rest (`...args`) |
| [function overloads.ts](./traditional%20function/function%20overloads.ts) | Multiple call signatures |
| [function return types.ts](./traditional%20function/function%20return%20types.ts) | Union return types |
| [iife.ts](./traditional%20function/iife.ts) | Immediately invoked functions |

### Arrow functions

| File | Topic |
|------|--------|
| [basic arrow function.ts](./arrow%20function/basic%20arrow%20function.ts) | Basic arrow syntax |
| [basic arrow function 2.ts](./arrow%20function/basic%20arrow%20function%202.ts) | Parameters & types |
| [basic arrow function 3.ts](./arrow%20function/basic%20arrow%20function%203.ts) | Multi-param & object return |
| [arrow shorthand.ts](./arrow%20function/arrow%20shorthand.ts) | Implicit return |
| [arrow this binding.ts](./arrow%20function/arrow%20this%20binding.ts) | `this` behavior vs regular |

### Function return types

| File | Return type |
|------|-------------|
| [number.ts](./function%20return%20types/number.ts) | `number` |
| [string.ts](./function%20return%20types/string.ts) | `string` |
| [boolean.ts](./function%20return%20types/boolean.ts) | `boolean` |
| [void.ts](./function%20return%20types/void.ts) | `void` |
| [any.ts](./function%20return%20types/any.ts) | `any` |
| [unknown.ts](./function%20return%20types/unknown.ts) | `unknown` |
| [never.ts](./function%20return%20types/never.ts) | `never` |
| [promise.ts](./function%20return%20types/promise.ts) | `Promise<T>` |
| [array.ts](./function%20return%20types/array.ts) | `T[]` / `Array<T>` |
| [object.ts](./function%20return%20types/object.ts) | `object` / typed objects |
| [tuple.ts](./function%20return%20types/tuple.ts) | `[T, U]` tuples |
| [union.ts](./function%20return%20types/union.ts) | `A \| B` unions |
| [value.ts](./function%20return%20types/value.ts) | Inferred return types |

> **Note:** [unkown.ts](./function%20return%20types/unkown.ts) re-exports [unknown.ts](./function%20return%20types/unknown.ts) (typo kept for compatibility).

### Other patterns

| File | Topic |
|------|--------|
| [methods.ts](./function%20method/methods.ts) | Methods on objects & interfaces |
| [generic function.ts](./generic%20function/generic%20function.ts) | Generic functions `<T>` |
| [callback function.ts](./callback%20function/callback%20function.ts) | Callbacks & higher-order functions |
| [async await.ts](./async%20await/async%20await.ts) | `async` / `await` |
| [function type alias.ts](./function%20type%20alias/function%20type%20alias.ts) | Function type aliases |

---

## Quick reference

### Function declaration

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

### Arrow function

```ts
const add = (a: number, b: number): number => a + b;
```

### Function expression

```ts
const subtract = function (a: number, b: number): number {
  return a - b;
};
```

---

## Parameters

| Feature | Syntax | Example |
|---------|--------|---------|
| Required | `name: string` | `function f(x: number)` |
| Optional | `name?: string` | `function f(x?: number)` |
| Default | `name = "Guest"` | `function f(x = 0)` |
| Rest | `...args: number[]` | `function sum(...n: number[])` |

---

## Return types

| Type | When to use |
|------|-------------|
| `void` | Side effects only (logging) |
| `never` | Always throws or never finishes |
| `unknown` | Safe alternative to `any` |
| `Promise<T>` | Async operations |
| `A \| B` | Multiple possible return shapes |
| `[T, U]` | Fixed tuple returns |

---

## Regular vs arrow

| Feature | Regular function | Arrow function |
|---------|------------------|----------------|
| Hoisting | Yes (declarations) | No |
| `this` binding | Own `this` | Lexical `this` |
| `arguments` object | Yes | No |
| Best for | Object methods | Callbacks, short handlers |

---

## Folder structure

```
functions/
├── readme.md
├── traditional function/
│   ├── simple function.ts
│   ├── regular function.ts
│   ├── function expression.ts
│   ├── function with params.ts
│   ├── optional default params.ts
│   ├── rest parameters.ts
│   ├── function overloads.ts
│   ├── function return types.ts
│   └── iife.ts
├── arrow function/
│   ├── basic arrow function.ts
│   ├── basic arrow function 2.ts
│   ├── basic arrow function 3.ts
│   ├── arrow shorthand.ts
│   └── arrow this binding.ts
├── function return types/
│   ├── number.ts, string.ts, boolean.ts
│   ├── void.ts, any.ts, unknown.ts, unkown.ts
│   ├── never.ts, promise.ts
│   ├── array.ts, object.ts, tuple.ts, union.ts
│   └── value.ts
├── function method/
│   └── methods.ts
├── generic function/
│   └── generic function.ts
├── callback function/
│   └── callback function.ts
├── async await/
│   └── async await.ts
└── function type alias/
    └── function type alias.ts
```

---

## Running lessons

```bash
npx ts-node "3. Fundation of Typescript/functions/traditional function/simple function.ts"
npx tsc --noEmit "3. Fundation of Typescript/functions/**/*.ts"
```

---

## Best practices

1. Prefer **explicit return types** on public APIs.
2. Use **`unknown`** instead of **`any`** when the type is not known.
3. Use **arrow functions** for callbacks; **regular functions** for object methods needing `this`.
4. Use **function overloads** when one function accepts different argument shapes.
5. Use **generics** when the same logic works with multiple types.
