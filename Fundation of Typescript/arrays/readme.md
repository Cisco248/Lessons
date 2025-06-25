# 📘 Understanding `Array<type>` in TypeScript

This guide is designed for educational purposes to help developers understand how arrays work in TypeScript using both **generic syntax** (`Array<type>`) and the **shorthand syntax** (`type[]`).

## 🔹 What is `Array<type>`?

In TypeScript, `Array<type>` is a **generic** way to declare arrays. It tells the compiler:

> “This array should only contain elements of the specified `type`.”

✅ It improves **code clarity**, **type safety**, and enables **better IntelliSense support**.

---

## 🧪 Examples

### 1. ✅ Basic Arrays

```ts
// Implicitly inferred as number[]
const Array_One = [1, 2, 3];
// Allows any type
const Array_Two: Array<any> = ["string", 1, true];
```

### 2. ✅ Typed Arrays Using Shorthand Syntax

```ts
const Array_Number_One: number[] = [1, 2, 3];
const Array_String_One: string[] = ["string", "string"];
const Array_Boolean_One: boolean[] = [true, false];
```

### 3. ✅ Mixed-Type Arrays Using Union Types

```ts
const Array_Mix_One: (string | number | boolean)[] = ["string", 1, true];
```

### 4. ✅ Multi-Dimensional Arrays

```ts
const Array_Number_Two: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
];
const Array_String_Two: string[][] = [
  ["string", "string"],
  ["string", "string"],
];
const Array_Boolean_Two: boolean[][] = [
  [true, false],
  [true, false],
];
const Array_Mix_Two: (string | number | boolean)[][] = [
  ["string", 1, true],
  ["string", 1, true],
];
```
