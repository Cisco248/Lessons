# 📘 TypeScript Objects

This document provides a comprehensive introduction to **Objects in TypeScript**, including how to define objects, call their properties and methods, use object types and interfaces, and apply best practices.

---

## 🔹 1. What is an Object?

In TypeScript, an object is a collection of **key-value pairs**, where keys are strings (or symbols) and values can be any type.

### ✅ Example 1

```ts
const person = {
  name: "Lahiru",
  age: 25,
  isStudent: true,
};
```

## 🔹 2. Accessing Object Properties (Object Call)

You can access object properties using:

### ✅ Dot notation

```ts
console.log(person.name); // Name
```

### ✅ Bracket notation

```ts
console.log(person["age"]); // Age
```

## 🔹 3. Object Methods

Objects can contain methods (functions as properties).

```ts
const calculator = {
  add: (a: number, b: number): number => a + b,
  subtract(a: number, b: number): number {
    return a - b;
  },
};

console.log(calculator.add(5, 2)); // 7
console.log(calculator.subtract(5, 2)); // 3
```

## 🔹 4. Defining Object Types

You can define the shape of an object using either inline types, type aliases, or interfaces.

### ✅ Inline type

```ts
const car: { brand: string; year: number } = {
  brand: "Toyota",
  year: 2020,
};
```

### ✅ Type alias

```ts
type Car = {
  brand: string;
  year: number;
};

const carOne: Car = { brand: "Tesla", year: 2023 };
```

### ✅ Interface

```ts
interface User {
  name: string;
  email: string;
}

const userOne: User = { name: "Name", email: "name@example.com" };
```

## 🔹 5. Optional & Readonly Properties

## ✅ Optional property (using ?)

```ts
interface Book {
  title: string;
  author?: string; // Optional
}

const myBook: Book = { title: "Clean Code" };
```

### ✅ Readonly property

```ts
interface Laptop {
  readonly serial: string;
  model: string;
}

const myLaptop: Laptop = { serial: "123ABC", model: "Dell XPS" };
// myLaptop.serial = "456XYZ"; ❌ Error: Cannot assign to 'serial'
```

## 🔹 6. Object with Index Signature

Useful when keys are dynamic or unknown:

```ts
interface Dictionary {
  [key: string]: string;
}

const translations: Dictionary = {
  hello: "hola",
  goodbye: "adiós",
};
```

## 🔹 7. Object as Function Parameters

✅ Destructuring with types:

```ts
function greet({ name, age }: { name: string; age: number }) {
  console.log(`Hello ${name}, age ${age}`);
}

greet({ name: "Name", age: 20 });
```

## 🔹 8. Class-Based Objects with Methods

```ts
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  speak(): string {
    return `${this.name} makes a sound.`;
  }
}

const dog = new Animal("Buddy");
console.log(dog.speak()); // Buddy makes a sound.
```

## 🧠 Summary

Concept Example

```ts
Object declaration const obj = { key: value }
Dot notation obj.key
Bracket notation obj["key"]
Method obj.method = () => {}
Object type type or interface
Optional property param?: type
Readonly property readonly param: type
Class-based object class MyClass { method() {} }
```

## 🎯 Best Practices

- Use interface for reusable object structures.
- Prefer readonly for constants inside objects.
- Use type annotations on functions and parameters.
- Use ? for properties that may not always exist.

## 🧾 License

This documentation is provided for educational use. Feel free to use it in tutorials, classroom settings, and personal learning.
Let me know if you'd like this packaged as a starter TypeScript project or if you want additional examples like nested objects, object arrays, or deep typing!
