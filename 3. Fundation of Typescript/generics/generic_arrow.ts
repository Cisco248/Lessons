// ============================================================
// GENERIC ARROW FUNCTIONS
// ============================================================

const identity = <T>(value: T): T => value;

const getFirst = <T>(arr: T[]): T | undefined => arr[0];

const merge = <T extends object, U extends object>(a: T, b: U): T & U => ({
    ...a,
    ...b,
});

// Note: In .tsx files use <T,>(value: T) => to avoid JSX conflict

const num = identity(42);
const first = getFirst([1, 2, 3]);
const combined = merge({ name: "Lahiru" }, { age: 25 });

export { identity, getFirst, merge, num, first, combined };
