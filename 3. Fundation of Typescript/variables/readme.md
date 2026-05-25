# Understanding Variables in TypeScript

Variables store data with **type safety** using `let`, `const`, and type annotations.

---

## Lesson files

| File | Topic |
|------|--------|
| [number.ts](./number.ts) | Number variables & methods |
| [string.ts](./string.ts) | String variables & methods |
| [boolean.ts](./boolean.ts) | Boolean variables & logic |
| [let_const_var.ts](./let_const_var.ts) | `let`, `const`, `var` |
| [type_inference.ts](./type_inference.ts) | Inference vs explicit types |
| [any_unknown_never.ts](./any_unknown_never.ts) | `any`, `unknown`, `never`, null |

---

## Declarations

| Keyword | Scope | Reassign | Recommended |
|---------|-------|----------|-------------|
| `const` | Block | No | Yes (default) |
| `let` | Block | Yes | When reassignment needed |
| `var` | Function | Yes | Avoid |

---

## Running lessons

```bash
npx ts-node "3. Fundation of Typescript/variables/number.ts"
```
