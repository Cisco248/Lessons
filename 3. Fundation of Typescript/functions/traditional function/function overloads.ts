// ============================================================
// FUNCTION OVERLOADS
// ============================================================
// Multiple call signatures for one implementation

function formatInput(value: string): string;
function formatInput(value: number): string;
function formatInput(value: boolean): string;
function formatInput(value: string | number | boolean): string {
    if (typeof value === "string") return value.trim();
    if (typeof value === "number") return value.toFixed(2);
    return value ? "true" : "false";
}

function makePair(a: string, b: string): [string, string];
function makePair(a: number, b: number): [number, number];
function makePair(a: string | number, b: string | number): [string | number, string | number] {
    return [a, b];
}

const str = formatInput("  hello  ");   // "hello"
const num = formatInput(3.14159);       // "3.14"
const bool = formatInput(true);         // "true"

const pairStr = makePair("a", "b");     // [string, string]
const pairNum = makePair(1, 2);         // [number, number]

export { formatInput, makePair, str, num, bool, pairStr, pairNum };
