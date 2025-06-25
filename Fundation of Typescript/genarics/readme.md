# 📘 Understanding Arrays, Generic Functions, and Interfaces in TypeScript

This guide explores TypeScript features such as:

- Array typing with generics
- Generic functions
- Type constraints
- Interfaces and how to use them with generics

---

## 🔹 1. Declaring Typed Arrays

```ts
const Array_One: Array<number> = [];
const Array_Two: Array<string> = [];
const Array_Three: Array<boolean> = [];
```

### ✅ Explanation 1

- Arrays are declared using Array **generic** syntax.
- You can also use shorthand syntax like `number[]`, `string[]`, etc.

## 🔹 2. Basic Typed Functions

```ts
function Function_One(val: boolean | number): boolean | number {
  return val;
}
```

### ✅ Explanation 2

- Accepts either a boolean or number and returns the same type.
- Useful for limited union-type handling.

## 🔹 3. Generic Function (Basic)

```ts
function Function_Two<T>(val: T): T {
  return val;
}
```

### ✅ Explanation 3

- Accepts and returns a value of any type T.
- Common in utility functions where type flexibility is needed.

## 🔹 4. Interface and Function Using as Type Assertion

```ts
interface Interface_One {
  param_1: string;
  param_2: number;
  param_3: boolean;
}

function Function_Three<Interface_One>(
  param_1: string,
  param_2: number,
  param_3: boolean
): Interface_One {
  return { param_1, param_2, param_3 } as Interface_One;
}
```

### ✅ Explanation 4

- Uses a type assertion (as Interface_One) to force the return type.
- The generic name Interface_One here shadows the actual interface, which can be confusing.
- Best Practice: Rename the generic to avoid confusion, e.g., `extends Interface_One`.

## 🔹 5. Generic Function with Array Input

```ts
function Function_Four<T>(param_4: T[]): T {
  const index = 0;
  return param_4[index];
}
```

### ✅ Explanation 5

- Accepts an array of type T and returns the first element.

## 🔹 6. Arrow Function Version

```ts
const GetVariable = <T>(param_4: T[]): T => {
  const index = 0;
  return param_4[index];
};
```

### ✅ Explanation 6

- Equivalent to Function_Four but written in arrow function syntax.

## 🔹 7. Generic Function with Multiple Types

```ts
function Function_Five<T, U>(param_1: T, param_2: U): object {
  return { param_1, param_2 };
}
```

### ✅ Explanation 7

- Accepts any two types T and U and returns an object containing both.

## 🔹 8. Generic Functions with Type Constraints

```ts
function Function_Six<T, U extends string>(param_1: T, param_2: U): object;
function Function_Seven<T, U extends number>(param_1: T, param_2: U): object;
function Function_Eight<T, U extends boolean>(param_1: T, param_2: U): object;
```

### ✅ Explanation 8

- U is constrained to a specific primitive type (string, number, boolean).
- Prevents passing values outside of those types for param_2.

## 🔹 9. Interface Constraint on Generic Type

```ts
interface Interface_Two {
  param_1: string;
  param_2: string;
  param_3: string;
}

function Function_Nine<T extends Interface_Two>(param_1: T): object {
  return { param_1 };
}
```

### ✅ Explanation 9

- T must conform to the structure defined by Interface_Two.
- Ensures param_1 has the required shape at compile time.

## 🧠 Summary Table

| Feature                     | Purpose                   | Example                              |
| --------------------------- | ------------------------- | ------------------------------------ |
| `Array<type>`               | Typed arrays              | `Array<number>`                      |
| `function fn<T>()`          | Generic function          | `Function_Two<T>`                    |
| `T extends Interface`       | Constrain generic types   | `Function_Nine<T extends Interface>` |
| `Arrow function + generics` | Concise syntax            | `const fn = <T>(x: T) => x;`         |
| `Multiple generics`         | Handle more than one type | `Function_Five<T, U>()`              |

## 🧾 License

This codebase and guide are provided for educational use. Ideal for classroom learning, tutorials, or TypeScript practice.
Let me know if you'd like this as a `.ts` project with file structure or as a down
