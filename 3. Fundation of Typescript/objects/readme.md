# Understanding Objects in TypeScript

Objects store data as **key-value pairs**. TypeScript adds type safety via inline types, type aliases, and interfaces.

---

## Lesson files

### Object types

| File | Topic |
|------|--------|
| [basic object.ts](./object%20types/basic%20object.ts) | Creating & accessing objects |
| [explicit object.ts](./object%20types/explicit%20object.ts) | Typed objects with type alias |
| [inline type object.ts](./object%20types/inline%20type%20object.ts) | Inline type annotations |
| [nested obj.ts](./object%20types/nested%20obj.ts) | Nested objects |
| [combine obj.ts](./object%20types/combine%20obj.ts) | Intersection & spread merge |
| [optional & readonly obj.ts](./object%20types/optional%20&%20readonly%20obj.ts) | Optional & readonly props |
| [using interface.ts](./object%20types/using%20interface.ts) | Objects with interfaces |
| [obj with function.ts](./object%20types/obj%20with%20function.ts) | Methods on objects |
| [obj with dynamic property.ts](./object%20types/obj%20with%20dynamic%20property.ts) | Index signatures |
| [obj with class.ts](./object%20types/obj%20with%20class.ts) | Objects from classes |

### Object usage

| File | Topic |
|------|--------|
| [func call with object.ts](./object%20call/func%20call%20with%20object.ts) | Passing & destructuring objects |
| [object method.ts](./object%20methods/object%20method.ts) | `Object.keys`, `values`, `entries` |

---

## Access patterns

```ts
user.name;           // dot notation
user["age"];         // bracket notation
const { name } = user;  // destructuring
```

---

## Running lessons

```bash
npx ts-node "3. Fundation of Typescript/objects/object types/basic object.ts"
```
