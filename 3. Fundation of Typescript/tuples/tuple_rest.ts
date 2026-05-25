// ============================================================
// REST ELEMENTS IN TUPLES
// ============================================================

type StringNumberBooleans = [string, number, ...boolean[]];
type Strings = [string, ...string[]];

const data: StringNumberBooleans = ["score", 100, true, false, true];
const tags: Strings = ["typescript", "lesson", "tuple"];

// Rest must be last
function logTuple(head: string, ...rest: number[]): void {
    console.log(head, rest);
}

logTuple("values", 1, 2, 3);

export { StringNumberBooleans, Strings, data, tags, logTuple };
