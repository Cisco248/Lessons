# 📘 Understanding Functions and Arrow Functions in TypeScript

This educational guide explores the use of **regular functions** and **arrow functions** in TypeScript — key tools for structuring logic and behavior in your code.

---

## 🔹 1. Regular (Named) Functions

### ✅ Syntax 1

```ts
function functionName(param1: type, param2: type): returnType {
  // function body
  return someValue;
}
```

### ✅ Example 1

```ts
function add(x: number, y: number): number {
  return x + y;
}

console.log(add(5, 3)); // Output: 8
```

### 🔸 Features

- Can be hoisted (used before declared)
- Supports this context binding in objects
- More readable in large codebases

## 🔹 2. Function Expressions

Functions can also be assigned to variables.

### ✅ Example 2

```ts
const multiply = function (x: number, y: number): number {
    return x \* y;
};

console.log(multiply(4, 2)); // Output: 8
```

## 🔹 3. Arrow Functions (Lambda Syntax)

Arrow functions are a concise way to write functions using =>.

### ✅ Syntax 2

```ts
const functionName = (param1: type, param2: type): returnType => {
  return someValue;
};
```

### ✅ Example 3

```ts
const subtract = (x: number, y: number): number => {
  return x - y;
};

console.log(subtract(10, 4)); // Output: 6
```

## ✅ Shorter Version (for one-liners)

```ts
const square = (x: number): number => x \* x;
console.log(square(5)); // Output: 25
```

## 🧪 Bonus: Function with Optional and Default Parameters

```ts
function greet(name: string = "Guest"): string {
  return `Hello, ${name}`;
}

console.log(greet()); // Hello, Guest
console.log(greet("Name")); // Hello, Name
```

## 🧾 License

This documentation is intended for educational use. Use it freely in tutorials, learning modules, or personal projects.
Let me know if you'd like code examples in a `.ts` file or an interactive project!
