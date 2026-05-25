// ============================================================
// FUNCTION TYPE ALIASES
// ============================================================

type MathOperation = (a: number, b: number) => number;
type StringFormatter = (text: string) => string;
type VoidCallback = () => void;

const add: MathOperation = (a, b) => a + b;
const subtract: MathOperation = (a, b) => a - b;
const capitalize: StringFormatter = (text) => text.toUpperCase();
const onReady: VoidCallback = () => console.log("Ready");

// Using type alias as parameter
function calculate(a: number, b: number, op: MathOperation): number {
    return op(a, b);
}

const sum = calculate(10, 5, add);
const diff = calculate(10, 5, subtract);
const formatted = capitalize("typescript");

onReady();

export { add, subtract, capitalize, onReady, calculate, sum, diff, formatted };
