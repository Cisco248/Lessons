// ============================================================
// FUNCTION EXPRESSIONS
// ============================================================
// A function assigned to a variable. NOT hoisted like declarations.

const subtract = function (a: number, b: number): number {
    return a - b;
};

// Named function expression (helps debugging in stack traces)
const power = function powerFn(base: number, exp: number): number {
    return Math.pow(base, exp);
};

// Typed expression variable
type Formatter = (text: string) => string;
const uppercase: Formatter = function (text) {
    return text.toUpperCase();
};

const diff = subtract(10, 4);        // 6
const squared = power(2, 8);         // 256
const formatted = uppercase("hello"); // "HELLO"

export { subtract, power, uppercase, diff, squared, formatted };
