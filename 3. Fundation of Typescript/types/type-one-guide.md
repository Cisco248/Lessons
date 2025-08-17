
# TypeScript Custom Type and Function Guide

## 📘 Type Definition

### `Type_One`

A custom object type with three properties:

```ts
type Type_One = {
  param_1: string;  // A string property
  param_2: number;  // A number property
  param_3: boolean; // A boolean property
};
```

---

## ✅ Function Definition

### `Function_One`

Accepts an object of type `Type_One` and returns it.

```ts
function Function_One(type: Type_One) {
  return type;
}
```

#### 📌 Usage Example (inline)

```ts
Function_One({
  param_1: "string",
  param_2: 1,
  param_3: true
});
```

---

## 💾 Using Variables

Declare a variable with `Type_One` and modify its properties.

```ts
let Variable_One: Type_One = {
  param_1: 'string',
  param_2: 1,
  param_3: true
};

// Modify values
Variable_One.param_1 = 'new string';
Variable_One.param_2 = 2;
Variable_One.param_3 = false;
```

---

## ✅ Summary Table

| Property   | Type    | Description          |
|------------|---------|----------------------|
| `param_1`  | string  | Text value           |
| `param_2`  | number  | Numeric value        |
| `param_3`  | boolean | Boolean true/false   |

---

## ✅ Best Practices

- Use types to enforce structure in your objects.
- Document functions clearly using `@param` and `@returns` tags.
- Separate types into reusable blocks for maintainable code.
