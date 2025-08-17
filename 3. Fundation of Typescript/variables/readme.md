# 📘 TypeScript Variables

This guide explains how variables work in **TypeScript**, including how to declare them, assign types, use different data types, and follow best practices for scalable and maintainable code.

---

## 🔹 1. Variable Declarations

In TypeScript, you can declare variables using:

---

### ✅ `let`

- Block-scoped
- Can be reassigned

```ts
let name: string = "Lahiru";
name = "Alex"; // ✅
```

### ✅ `const`

- Block-scoped

Cannot be reassigned

```ts
const PI: number = 3.14;
// PI = 3.1415; ❌ Error
```

### ✅ `var` (Not Recommended)

- Function-scoped (not block-scoped)

Can cause unexpected behavior due to hoisting

```ts
var age = 25;
```

⚠️ Prefer let and const over var.

## 🔹 2. Type Annotations

TypeScript allows you to annotate the type of a variable:

---

```ts
let username: string = "Lahiru";
let score: number = 99;
let isActive: boolean = true;
```

## 🔹 3. Type Inference

TypeScript can automatically infer the type if a value is assigned during declaration:

---

```ts
let city = "Colombo"; // inferred as string
```

## 🔹 4. Union Types

Declare a variable that can hold multiple types:

---

```ts
let id: number | string;
id = 101;
id = "ABC101";
```

## 🔹 5. Arrays

### ✅ Basic Arrays

```ts
let numbers: number[] = [1, 2, 3];
let names: Array<string> = ["Lahiru", "Alex"];
```

### ✅ Mixed-Type Array (Union)

```ts
let mixed: (number | string)[] = [1, "two", 3];
```

## 🔹 6. Tuples

Fixed-length arrays with known types:

---

```ts
let user: [string, number] = ["Lahiru", 25];
```

## 🔹 7. any Type

Disables type-checking — should be used sparingly.

---

```ts
let data: any = "Hello";
data = 42;
data = true;
```

⚠️ Use any only when absolutely necessary.

## 🔹 8. unknown Type

Safer alternative to any — requires type-checking before use:

---

```ts
let input: unknown = "data";
if (typeof input === "string") {
  console.log(input.toUpperCase());
}
```

## 🔹 9. never Type

Represents values that never occur (e.g., a function that always throws):

---

````ts
function throwError(message: string): never {
throw new Error(message);
}
```

## 🔹 10. null and undefined

```ts
let a: null = null;
let b: undefined = undefined;
````

## 🔹 11. Constants and Immutability

### ✅ const with objects

```ts
const user = {
  name: "Lahiru",
};
user.name = "Alex"; // ✅ Allowed (object property is mutable)
// user = {} ❌ Not allowed (reassigning is not allowed)
```

## 🔹 12. Variable Scope

| Scope    | Type  | Keyword | Scope Level    |
| -------- | ----- | ------- | -------------- |
| Block    | Scope | `let`   | `{ ... }`      |
| Block    | Scope | `const` | `{ ... }`      |
| Function | Scope | `var`   | `function(){}` |

---

## 🧠 Summary Table

| Declaration | Scope    | Reassignable | Recommended |
| ----------- | -------- | ------------ | ----------- |
| `let`       | Block    | ✅ Yes       | ✅ Yes      |
| `const`     | Block    | ❌ No        | ✅ Yes      |
| `var`       | Function | ✅ Yes       | ❌ No       |

---

## 🧯 Best Practices

- ✅ Use const by default, use let if reassignment is needed
- ❌ Avoid var
- ✅ Use union types for flexible variables
- ✅ Prefer type inference when clear
- ✅ Avoid any, use unknown with type checks

---

## 🧾 License

This documentation is provided for educational and development use. Free to use in courses, tutorials, or personal projects.

---

```yaml
Let me know if you'd like this extended with examples using classes, objects, interfaces, or if you want this saved as a `.ts` + `.md` starter pack!
```
