# 📘 Understanding Union Types in TypeScript

Union types allow a variable to hold **multiple possible types**, enabling flexibility while maintaining type safety.

---

## 🔹 What is a Union Type?

In TypeScript, a union type is created using the `|` (pipe) symbol. It lets a variable accept **more than one type**.

### ✅ Syntax

```ts
let variableName: type1 | type2 | type3;
```

## 🧪 Examples with score_1 to score_4

```ts
let score_1: string | boolean;
let score_2: boolean | number;
let score_3: number | string;
let score_4: string | boolean | number;
```

### ✅ Detailed Explanation

#### 🔸 score_1: string | boolean

Can be either a string or boolean

```ts
score_1 = "Passed"; // ✅ string
score_1 = false; // ✅ boolean
// score_1 = 10; // ❌ Error: number is not assignable
```

#### 🔸 score_2: boolean | number

Can be either a boolean or number

```ts
score_2 = 85; // ✅ number
score_2 = true; // ✅ boolean
// score_2 = "Good"; // ❌ Error: string is not assignable
```

#### 🔸 score_3: number | string

Can be either a number or string

```ts
score_3 = "80%"; // ✅ string
score_3 = 80; // ✅ number
// score_3 = false; // ❌ Error: boolean is not assignable
```

#### 🔸 score_4: string | boolean | number

Can be any one of the three types

```ts
score_4 = "A+"; // ✅ string
score_4 = 95; // ✅ number
score_4 = true; // ✅ boolean
```

## 🧠 Why Use Union Types?

- To handle multiple input/output formats
- To manage dynamic data (e.g., user input, API responses)
- To model optional fields (string | undefined)

### 🧯 Type Narrowing Example

You can use type narrowing with conditionals to check the type before using it:

```ts
function displayScore(score: string | number) {
  if (typeof score === "string") {
    console.log("Score (text):", score.toUpperCase());
  } else {
    console.log("Score (number):", score.toFixed(2));
  }
}
```

## 🎯 Best Practices

- Keep union types minimal and meaningful
- Use type narrowing to handle logic safely
- Use interface or type aliases when unions get complex

## 🧾 License

This guide is provided for educational use. Use it in tutorials, workshops, or TypeScript practice materials.

Let me know if you'd like a `.ts` file that matches this documentation or additional examples like union arrays or function parameters with union types!
