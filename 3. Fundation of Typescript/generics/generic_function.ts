// ============================================================
// GENERIC FUNCTIONS
// ============================================================

function wrapInArray<T>(value: T): T[] {
    return [value];
}

function pair<T, U>(first: T, second: U): { first: T; second: U } {
    return { first, second };
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
}

const user = { id: 1, name: "Lahiru", active: true };

const numArray = wrapInArray(42);
const paired = pair("hello", 100);
const userName = getProperty(user, "name");

export { wrapInArray, pair, getProperty, numArray, paired, userName };
