// ============================================================
// GENERIC CONSTRAINTS (extends)
// ============================================================

// Constrain to string
function logLength<T extends string>(value: T): number {
    return value.length;
}

// Constrain to number
function double<T extends number>(value: T): T {
    return (value * 2) as T;
}

// Constrain to object
function mergeObjects<T extends object, U extends object>(a: T, b: U): T & U {
    return { ...a, ...b };
}

// Constrain to array-like
function logLength2<T extends { length: number }>(value: T): number {
    return value.length;
}

const strLen = logLength("hello");
const doubled = double(5);
const merged = mergeObjects({ x: 1 }, { y: 2 });
const arrLen = logLength2([1, 2, 3]);

export { logLength, double, mergeObjects, logLength2, strLen, doubled, merged, arrLen };
