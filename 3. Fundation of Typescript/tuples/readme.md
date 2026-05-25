# Understanding Tuples in TypeScript

Tuples are **fixed-length, ordered** arrays where each position has a specific type.

---

## Lesson files

| File | Topic |
|------|--------|
| [basic tuples.ts](./basic%20tuples.ts) | Basic tuple syntax & aliases |
| [tuple_destructure.ts](./tuple_destructure.ts) | Destructuring tuples |
| [tuple_optional.ts](./tuple_optional.ts) | Optional tuple elements |
| [tuple_rest.ts](./tuple_rest.ts) | Rest elements `...T[]` |
| [tuple_readonly.ts](./tuple_readonly.ts) | `readonly` tuples |

See also: [tuple-guide.md](./tuple-guide.md)

---

## Tuple vs array

| Feature | `number[]` | `[number, string]` |
|---------|------------|---------------------|
| Length | Variable | Fixed |
| Element types | All same | Per position |
| Use case | Lists | Pairs, coordinates, API tuples |

---

## Running lessons

```bash
npx ts-node "3. Fundation of Typescript/tuples/basic tuples.ts"
```
