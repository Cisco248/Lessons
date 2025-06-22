
# TypeScript Interfaces Guide

## 📘 Interface_One

```ts
interface Interface_One {
  param_1: string;                     // A required string
  param_2: number;                     // A required number
  param_3: boolean;                    // A required boolean
  param_4?: () => string;              // An optional method that returns a string
  param_5(param_1: string): string;    // A required method that takes a string and returns a string
}
```

### ✅ Example: Using Interface_One

```ts
const Variable_One: Interface_One = {
  param_1: "string",
  param_2: 1,
  param_3: true,
  param_5: (param_1: 'string') => {
    return param_1;
  }
};
```

> `param_4` is optional and is not required to implement.

---

## 📘 Interface_Two (Extends Interface_One)

```ts
interface Interface_Two extends Interface_One {
  param_6: string;    // New required string
  param_7: number;    // New required number
}
```

### ✅ Example: Using Interface_Two

```ts
const Variable_Two: Interface_Two = {
  param_1: "string",
  param_2: 1,
  param_3: true,
  param_5: (param_1: 'string') => {
    return param_1;
  },
  param_6: "string",
  param_7: 2
};
```

---

## 🔍 Summary Table of Interface Members

| Property / Method | Type                            | Required | Description                                   |
|-------------------|----------------------------------|----------|-----------------------------------------------|
| `param_1`         | `string`                        | ✅ Yes   | Basic string value                            |
| `param_2`         | `number`                        | ✅ Yes   | Basic number value                            |
| `param_3`         | `boolean`                       | ✅ Yes   | Boolean flag                                  |
| `param_4`         | `() => string`                  | ❌ No    | Optional method returning a string            |
| `param_5`         | `(param_1: string) => string`   | ✅ Yes   | Function accepting string, returning string   |
| `param_6`         | `string` (from Interface_Two)   | ✅ Yes   | Extended string field                         |
| `param_7`         | `number` (from Interface_Two)   | ✅ Yes   | Extended number field                         |

---

## ✅ Best Practices

- Use interfaces to define consistent object structures.
- Mark optional fields with `?`.
- Use `extends` to reuse and expand interfaces.
- Prefer interfaces when defining object contracts and APIs.
