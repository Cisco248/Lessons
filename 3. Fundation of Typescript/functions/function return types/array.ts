// ============================================================
// FUNCTION RETURN TYPE: Array / T[]
// ============================================================

function returnArray(): number[] {
    return [1, 2, 3];
}

function returnStringArray(): Array<string> {
    return ["a", "b", "c"];
}

function filterEvens(nums: number[]): number[] {
    return nums.filter((n) => n % 2 === 0);
}

const nums = returnArray();
const strings = returnStringArray();
const evens = filterEvens([1, 2, 3, 4, 5, 6]);

export { returnArray, returnStringArray, filterEvens, nums, strings, evens };
