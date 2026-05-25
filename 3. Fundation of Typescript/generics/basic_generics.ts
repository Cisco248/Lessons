// ============================================================
// BASIC GENERICS
// ============================================================
// Generics let you write reusable code that works with any type
// while keeping full type safety.

// 1. Identity function — returns whatever type you pass in
function identity<T>(value: T): T {
    return value;
}

// 2. Generic with explicit type argument
const num = identity<number>(42);
const str = identity<string>("hello");

// 3. Type inference — TypeScript picks T automatically
const inferred = identity(true);  // T = boolean

// 4. Union type (non-generic alternative for comparison)
function acceptBoolOrNumber(val: boolean | number): boolean | number {
    return val;
}

const boolOrNum = acceptBoolOrNumber(42);

export { identity, num, str, inferred, acceptBoolOrNumber, boolOrNum };
