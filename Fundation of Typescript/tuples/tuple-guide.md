
# TypeScript Tuples Guide

## 📘 What is a Tuple in TypeScript?

A **tuple** is a fixed-length, ordered array where each element has a specific type.  
Unlike regular arrays (e.g., `number[]`), where all items are of the same type,  
**tuples allow multiple types in specific positions**.

---

## ✅ Tuple Examples

### Tuple_One: Three numbers

```ts
let Tuple_One: [number, number, number];
Tuple_One = [1, 2, 3];
```

---

### Tuple_Two: Declared and initialized in one line

```ts
let Tuple_Two: [number, number, number] = [4, 5, 6];
```

---

### Tuple_Type_One: Type alias for [number, number]

```ts
type Tuple_Type_One = [number, number];
const Variable_One: Tuple_Type_One = [7, 8];
```

---

### Tuple_Type_Two: Type alias for [string, string]

```ts
type Tuple_Type_Two = [string, string];
const Variable_Two: Tuple_Type_Two = ['string', 'string'];
```

---

### Tuple_Type_Three: Mixed tuple [number, string]

```ts
type Tuple_Type_Three = [number, string];
const Variable_Three: Tuple_Type_Three = [1, 'string'];
```

---

## 📌 Tuple Benefits

- Fixed length and order
- Type-safe access to values
- Supports multiple types in a single structure
- Useful for function returns and pairs

---

## 🔒 Example Use Cases

- Coordinate pairs: `[x: number, y: number]`
- HTTP response: `[statusCode: number, message: string]`
- RGB color: `[red: number, green: number, blue: number]`
