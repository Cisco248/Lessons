# Understanding Union Types in TypeScript

Union types let a variable hold **one of several types**, written with `|`.

---

## Lesson files

| File | Topic |
|------|--------|
| [basic union.ts](./basic%20union.ts) | Basic `string \| number` unions |
| [union_narrowing.ts](./union_narrowing.ts) | Type narrowing with `typeof` |
| [union_literals.ts](./union_literals.ts) | Literal unions (`"a" \| "b"`) |
| [union_functions.ts](./union_functions.ts) | Unions in params & returns |
| [union_arrays.ts](./union_arrays.ts) | Union arrays `(string \| number)[]` |

---

## Syntax

```ts
let id: string | number;
type Status = "pending" | "active" | "done";
```

---

## Type narrowing

```ts
function fn(value: string | number) {
  if (typeof value === "string") {
    value.toUpperCase();
  } else {
    value.toFixed(2);
  }
}
```

---

## Running lessons

```bash
npx ts-node "3. Fundation of Typescript/unions/basic union.ts"
```
