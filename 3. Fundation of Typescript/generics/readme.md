# Understanding Generics in TypeScript

Generics let you write **reusable, type-safe code** that works with many types without losing TypeScript's type checking. Use them for functions, classes, interfaces, and built-in utility types.

This folder contains hands-on lesson files for every common generic pattern.

---

## Lesson files

| File | Topic |
|------|--------|
| [basic_generics.ts](./basic_generics.ts) | Identity function & type inference |
| [generic_arrays.ts](./generic_arrays.ts) | `Array<T>`, `T[]`, generic array helpers |
| [generic_function.ts](./generic_function.ts) | Generic functions, `keyof` access |
| [generic_arrow.ts](./generic_arrow.ts) | Generic arrow function syntax |
| [multiple_generics.ts](./multiple_generics.ts) | Multiple type parameters `<T, U>` |
| [generic_constraints.ts](./generic_constraints.ts) | `extends` constraints |
| [generic_interfaces.ts](./generic_interfaces.ts) | Interface constraints on `T` |
| [generic_interfaces_advanced.ts](./generic_interfaces_advanced.ts) | Generic interfaces, `Repository<T>`, `Result<T>` |
| [generic_class.ts](./generic_class.ts) | Generic classes (`Box<T>`, `Stack<T>`) |
| [default_generic.ts](./default_generic.ts) | Default type parameters `T = string` |
| [keyof_generics.ts](./keyof_generics.ts) | `keyof T` with generics |
| [utility_types.ts](./utility_types.ts) | `Partial`, `Pick`, `Omit`, `Record`, `Readonly` |

### Legacy filenames (re-exports)

| File | Points to |
|------|-----------|
| [basic_genarics.ts](./basic_genarics.ts) | `basic_generics.ts` |
| [generic using class.ts](./generic%20using%20class.ts) | `generic_class.ts` |

---

## What is a generic?

A generic is a **type variable** (usually `T`) that stands in for a real type when the code runs:

```ts
function identity<T>(value: T): T {
  return value;
}

identity(42);      // T = number
identity("hi");    // T = string
```

---

## Syntax quick reference

### Generic function

```ts
function wrap<T>(value: T): T[] {
  return [value];
}
```

### Generic arrow function

```ts
const wrap = <T>(value: T): T[] => [value];
```

### Generic class

```ts
class Box<T> {
  constructor(private value: T) {}
  getValue(): T {
    return this.value;
  }
}
```

### Constraint

```ts
function logLength<T extends string>(value: T): number {
  return value.length;
}
```

### Multiple generics

```ts
function pair<T, U>(a: T, b: U): { a: T; b: U } {
  return { a, b };
}
```

### Default type parameter

```ts
function create<T = string>(value: T): T {
  return value;
}
```

---

## Generic arrays

```ts
const nums: Array<number> = [1, 2, 3];
const names: string[] = ["a", "b"];

function first<T>(arr: T[]): T | undefined {
  return arr[0];
}
```

---

## Constraints (`extends`)

| Pattern | Meaning |
|---------|---------|
| `T extends string` | T must be assignable to string |
| `T extends object` | T must be an object type |
| `T extends Interface` | T must include Interface's shape |
| `K extends keyof T` | K must be a key of object T |

---

## Built-in utility types

| Utility | Purpose |
|---------|---------|
| `Partial<T>` | All properties optional |
| `Required<T>` | All properties required |
| `Readonly<T>` | Properties cannot be reassigned |
| `Pick<T, K>` | Select specific keys |
| `Omit<T, K>` | Remove specific keys |
| `Record<K, V>` | Object type with keys K and values V |

See: [utility_types.ts](./utility_types.ts)

---

## Regular vs generic functions

| Approach | Example | When to use |
|----------|---------|-------------|
| Union types | `(x: string \| number) => ...` | Fixed small set of types |
| Generics | `<T>(x: T) => T` | Any type, keep input/output linked |
| `any` | `(x: any) => any` | Avoid — loses type safety |

---

## Folder structure

```
generics/
├── readme.md
├── basic_generics.ts
├── basic_genarics.ts          (re-export)
├── generic_arrays.ts
├── generic_function.ts
├── generic_arrow.ts
├── multiple_generics.ts
├── generic_constraints.ts
├── generic_interfaces.ts
├── generic_interfaces_advanced.ts
├── generic_class.ts
├── generic using class.ts       (re-export)
├── default_generic.ts
├── keyof_generics.ts
└── utility_types.ts
```

---

## Running lessons

```bash
npx ts-node "3. Fundation of Typescript/generics/basic_generics.ts"
npx tsc --noEmit "3. Fundation of Typescript/generics/basic_generics.ts"
```

---

## Best practices

1. Use **generics** when input and output types must match.
2. Use **`extends`** to limit what types are allowed.
3. Prefer **`unknown`** over **`any`** inside generic code when type is uncertain.
4. Avoid **shadowing interface names** with generic parameters (e.g. don't use `<Interface_One>` when `Interface_One` is already an interface).
5. Use **utility types** before writing custom mapped types from scratch.
