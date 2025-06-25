# 📘 Understanding Access Modifiers and Property Types in TypeScript Classes

This educational guide explores how TypeScript handles **access modifiers** (`public`, `private`, `readonly`) and how class properties are defined and used.

---

## 🔹 Class Overview

```ts
class Class_One {
  public param_1: string;
  private param_2: string;
  readonly param_3: string = "string";

  constructor(param_1: string, param_2: string) {
    this.param_1 = param_1;
    this.param_2 = param_2;
  }
}
```

## ✅ Key Concepts

| Modifier   | Description                                                   |
| ---------- | ------------------------------------------------------------- |
| `public`   | Accessible and changeable from anywhere.                      |
| `private`  | Accessible only within the class.                             |
| `readonly` | Can be read externally but not modified after initialization. |

## 🧪 Example Usage

```ts
const Variable_One = new Class_One("string_1", "string_2");

// ✅ Public property can be accessed and updated
Variable_One.param_1 = "string_2";

// ❌ Private property can't be accessed from outside
// Variable_One.param_2 = 'test'; // Error

// ❌ Readonly property can't be reassigned
// Variable_One.param_3 = 'new_value'; // Error
```
