// ============================================================
// INTERFACE METHODS
// ============================================================

interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
    reset(): void;
}

const calc: Calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    reset() {
        console.log("Calculator reset");
    },
};

const sum = calc.add(10, 5);
calc.reset();

export { Calculator, calc, sum };
