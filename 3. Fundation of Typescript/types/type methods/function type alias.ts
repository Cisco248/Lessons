// ============================================================
// FUNCTION TYPE ALIASES
// ============================================================

type MathFn = (a: number, b: number) => number;
type StringFn = (input: string) => string;
type VoidFn = () => void;

const add: MathFn = (a, b) => a + b;
const shout: StringFn = (s) => s.toUpperCase();
const onInit: VoidFn = () => console.log("Initialized");

function calculate(a: number, b: number, op: MathFn): number {
    return op(a, b);
}

const sum = calculate(5, 3, add);
const yelled = shout("hello");
onInit();

export { MathFn, StringFn, add, shout, calculate, sum, yelled };
