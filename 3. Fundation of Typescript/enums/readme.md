# Understanding Enums in TypeScript

Enums (`enumerations`) let you define a **named set of constants**. They make code more readable, type-safe, and easier to maintain than magic numbers or raw strings scattered through your project.

This folder contains hands-on lesson files for every common enum pattern in TypeScript.

---

## Lesson files

| File | Topic | When to use |
|------|--------|-------------|
| [number_enum.ts](./number_enum.ts) | Numeric enums | Integer IDs, statuses, priorities; supports **reverse lookup** |
| [string_enum.ts](./string_enum.ts) | String enums | API methods, themes, labels; human-readable string values |
| [boolean_enum.ts](./boolean_enum.ts) | Boolean-like enums | Feature flags, yes/no toggles (via `as const` object) |
| [dict_enum.ts](./dict_enum.ts) | Dictionary/object enums | Config maps, roles with metadata, API endpoint objects |
| [tuple_enum.ts](./tuple_enum.ts) | Tuple enums | Coordinates, RGB colors, fixed `[name, id, flag]` records |
| [float_enum.ts](./float_enum.ts) | Float/decimal enums | Tax rates, opacity, temperatures (via `as const` object) |
| [const_enum.ts](./const_enum.ts) | Const enums | Compile-time inlining; no runtime object |

---

## What is an enum?

An enum groups related constants under one name:

```ts
enum Status {
  Pending,
  Active,
  Completed,
}
```

Each member gets a value you can reference as `Status.Active`.

---

## Native enum types (TypeScript built-in)

### 1. Numeric enum

```ts
enum Status {
  Pending,    // 0 (auto-increment)
  Active,     // 1
  Completed,  // 2
}
```

**Manual values:**

```ts
enum Priority {
  Low = 1,
  Medium = 2,
  High = 3,
}
```

**Key feature:** Reverse mapping — `Status[1]` returns `"Active"`.

See: [number_enum.ts](./number_enum.ts)

---

### 2. String enum

```ts
enum Color {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE",
}
```

**Key feature:** No reverse mapping. Values are the strings themselves.

See: [string_enum.ts](./string_enum.ts)

---

### 3. Const enum

```ts
const enum Compass {
  North = 0,
  East = 90,
}
```

**Key feature:** Inlined at compile time — **no runtime object**. Cannot use `Object.keys()` on it.

See: [const_enum.ts](./const_enum.ts)

---

## Const object pattern (`as const`)

TypeScript enums only support **number** or **string** members. For boolean, float, object, or tuple values, use a const object:

```ts
const TaxRate = {
  Low: 0.05,
  Standard: 0.15,
  High: 0.25,
} as const;

type TaxRate = typeof TaxRate[keyof typeof TaxRate];
```

| Pattern | Lesson file |
|---------|-------------|
| Boolean | [boolean_enum.ts](./boolean_enum.ts) |
| Float / decimal | [float_enum.ts](./float_enum.ts) |
| Dictionary (object) | [dict_enum.ts](./dict_enum.ts) |
| Tuple | [tuple_enum.ts](./tuple_enum.ts) |

---

## How to retrieve enum values

### All types — common methods

| Method | Example | Works on |
|--------|---------|----------|
| Dot notation | `Status.Active` | All |
| Bracket notation | `Status["Active"]` | All |
| `keyof typeof` | `keyof typeof Status` | All |
| `Object.keys()` | `Object.keys(Status)` | Runtime enums & `as const` |
| `Object.values()` | `Object.values(Status)` | Runtime enums & `as const` |
| `Object.entries()` | `Object.entries(Status)` | Runtime enums & `as const` |
| `for...in` | `for (const k in Status)` | Runtime enums & `as const` |
| Array `.includes()` | On filtered values array | All (with manual array for const enum) |
| Array `.find()` / `.filter()` / `.map()` | On `Object.values()` | All |

### Numeric enum only

| Method | Example | Result |
|--------|---------|--------|
| Reverse lookup | `Status[1]` | `"Active"` |

**Important:** Numeric enums duplicate keys in `Object.keys()` / `Object.values()` because of reverse mapping. Filter with:

```ts
Object.keys(Status).filter((k) => isNaN(Number(k)));     // names only
Object.values(Status).filter((v) => typeof v === "number"); // numbers only
```

### String / object / tuple / float — reverse lookup (manual)

```ts
function getNameFromValue<T extends Record<string, string>>(
  enumObj: T,
  value: string
): keyof T | undefined {
  return (Object.keys(enumObj) as (keyof T)[]).find(
    (key) => enumObj[key] === value
  );
}
```

---

## Quick comparison

| Feature | Numeric enum | String enum | `as const` object | Const enum |
|---------|--------------|-------------|-------------------|------------|
| Runtime object | Yes | Yes | Yes | No (inlined) |
| Reverse lookup | Yes | No | Manual | N/A |
| Float values | No | No | Yes | No |
| Boolean values | No | No | Yes | No |
| Object/tuple values | No | No | Yes | No |
| `Object.keys()` at runtime | Yes* | Yes | Yes | No |

\*Numeric enums return duplicate keys unless filtered.

---

## Recommended practices

1. **Prefer `as const` objects** for boolean, float, dict, and tuple constants — more flexible than native enums.
2. **Use string enums** when values are sent over the wire or stored as strings.
3. **Use numeric enums** when you need integer IDs and reverse lookup.
4. **Use `const enum`** only when you need zero runtime overhead and do not need iteration.
5. **Avoid heterogeneous enums** (mixing unrelated types in one enum) — they are confusing and rarely needed.

---

## Running the lessons

From the project root:

```bash
npx ts-node "3. Fundation of Typescript/enums/number_enum.ts"
npx ts-node "3. Fundation of Typescript/enums/string_enum.ts"
# ... repeat for any lesson file
```

Or compile with:

```bash
npx tsc --noEmit "3. Fundation of Typescript/enums/*.ts"
```

---

## Folder structure

```
enums/
├── readme.md          ← This guide
├── number_enum.ts     ← Numeric enums + reverse lookup
├── string_enum.ts     ← String enums
├── boolean_enum.ts    ← Boolean constants (as const)
├── dict_enum.ts       ← Object/dictionary enums
├── tuple_enum.ts      ← Tuple-valued enums
├── float_enum.ts      ← Decimal/float constants
└── const_enum.ts      ← Compile-time const enums
```
