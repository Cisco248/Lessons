# Understanding Interfaces in TypeScript

Interfaces define the **shape** of objects — required properties, optional fields, methods, and extension rules.

---

## Lesson files

| File | Topic |
|------|--------|
| [basic Interfaces.ts](./basic%20Interfaces.ts) | Basic interface with properties & methods |
| [interface_extends.ts](./interface_extends.ts) | `extends` — interface inheritance |
| [interface_optional.ts](./interface_optional.ts) | Optional (`?`) & `readonly` properties |
| [interface_methods.ts](./interface_methods.ts) | Method signatures on interfaces |
| [interface_implementation.ts](./interface_implementation.ts) | Classes `implements` interfaces |

See also: [interfaces-guide.md](./interfaces-guide.md) (detailed reference)

---

## Quick syntax

```ts
interface User {
  name: string;
  age?: number;
  greet(): string;
}

interface Admin extends User {
  role: string;
}
```

---

## Interface vs type alias

| Feature | Interface | Type alias |
|---------|-----------|------------|
| Extend | `extends` | `&` intersection |
| Merge declarations | Yes | No |
| Best for | Object shapes, classes | Unions, primitives, tuples |

---

## Running lessons

```bash
npx ts-node "3. Fundation of Typescript/interfaces/basic Interfaces.ts"
```
