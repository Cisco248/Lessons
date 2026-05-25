// ============================================================
// MULTIPLE GENERIC TYPE PARAMETERS
// ============================================================

function combine<T, U>(a: T, b: U): { valueA: T; valueB: U } {
    return { valueA: a, valueB: b };
}

function mapTuple<T, U>(arr: T[], fn: (item: T) => U): U[] {
    return arr.map(fn);
}

function swap<T, U>(a: T, b: U): [U, T] {
    return [b, a];
}

const combined = combine("hello", 42);
const lengths = mapTuple(["a", "bb", "ccc"], (s) => s.length);
const swapped = swap(1, "two");

export { combine, mapTuple, swap, combined, lengths, swapped };
