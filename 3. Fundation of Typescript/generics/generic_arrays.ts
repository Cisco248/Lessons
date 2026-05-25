// ============================================================
// GENERIC ARRAYS — Array<T> and T[]
// ============================================================

const numbers: Array<number> = [1, 2, 3];
const strings: string[] = ["a", "b", "c"];
const flags: Array<boolean> = [true, false];

function firstItem<T>(arr: T[]): T | undefined {
    return arr[0];
}

function lastItem<T>(arr: T[]): T | undefined {
    return arr[arr.length - 1];
}

function filterArray<T>(arr: T[], predicate: (item: T) => boolean): T[] {
    return arr.filter(predicate);
}

const firstNum = firstItem(numbers);       // 1
const lastStr = lastItem(strings);         // "c"
const evens = filterArray(numbers, (n) => n % 2 === 0);

export {
    numbers,
    strings,
    flags,
    firstItem,
    lastItem,
    filterArray,
    firstNum,
    lastStr,
    evens,
};
