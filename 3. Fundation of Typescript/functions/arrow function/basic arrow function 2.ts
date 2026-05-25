// ============================================================
// ARROW FUNCTIONS — PARAMETERS & TYPES
// ============================================================

const multiply = (a: number, b: number): number => a * b;

const describe = (value: string | number): string =>
    `Value: ${value}, Type: ${typeof value}`;

// Optional parameter
const greet = (name?: string): string =>
    name ? `Hello, ${name}` : "Hello, Guest";

// Default parameter
const createLabel = (text: string, prefix: string = ">> "): string =>
    `${prefix}${text}`;

const product = multiply(4, 5);
const info = describe(true);
const greeting = greet();
const label = createLabel("Item");

export { multiply, describe, greet, createLabel, product, info, greeting, label };
