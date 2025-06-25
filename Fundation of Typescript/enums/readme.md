# 📘 Understanding Enums in TypeScript

This guide explains how `Enums` (`Enumerations`) work in TypeScript using practical examples. Enums allow you to define a set of named constants that can make your code more readable and maintainable.

---

## 🔹 What is an Enum?

Enums are a TypeScript feature used to define **named sets of numeric or string values**.

### Syntax

```ts
enum EnumName {
  VALUE1,
  VALUE2,
  VALUE3,
}
```

## 🧪 Example 1 - Numeric Enum with Auto-Increment

```ts
enum Enum_One {
  param_1,
  param_2,
  param_3,
}
```

### Notes 1

- Values are assigned automatically, starting from 0.
- param_1 = 0, param_2 = 1, param_3 = 2

### Usage 1

```ts
const Variable_Enum_One: Enum_One = Enum_One.param_1; // 0
const Variable_Enum_Two: Enum_One = Enum_One.param_2; // 1
const Variable_Enum_Three: Enum_One = Enum_One.param_3; // 2

console.log(Variable_Enum_One, Variable_Enum_Two, Variable_Enum_Three);
```

## 🧪 Example 2: Numeric Enum with Manual Values

```ts
enum Enum_Two {
  param_1 = 1,
  param_2 = 2,
  param_3 = 3,
}
```

### Notes 2

- Values are explicitly defined.
- Useful when specific numeric IDs or sequences are needed.

## Usage 2

```ts
const VET_1: Enum_Two = Enum_Two.param_1; // 1
const VET_2: Enum_Two = Enum_Two.param_2; // 2
const VET_3: Enum_Two = Enum_Two.param_3; // 3

console.log(VET_1, VET_2, VET_3);
```
