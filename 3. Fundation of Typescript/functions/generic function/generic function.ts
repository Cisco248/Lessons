// ============================================================
// GENERIC FUNCTIONS
// ============================================================

function identity<T>(value: T): T {
    return value;
}

function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

function mergeObjects<T extends object, U extends object>(a: T, b: U): T & U {
    return { ...a, ...b };
}

const num = identity(42);
const str = identity("hello");
const first = firstElement([1, 2, 3]);
const merged = mergeObjects({ name: "Lahiru" }, { age: 25 });

export { identity, firstElement, mergeObjects, num, str, first, merged };
