// ============================================================
// REGULAR FUNCTIONS — DECLARATION & HOISTING
// ============================================================

// Function declarations are hoisted — can be called before definition
const resultBefore = multiply(3, 4);   // 12

function multiply(x: number, y: number): number {
    return x * y;
}

// Assign function reference to a variable (not calling it)
function getHero(): string {
    return "thor";
}

const heroRef: () => string = getHero;
const heroName = heroRef();            // "thor" — call via reference

// Function as a value type
type MathFn = (a: number, b: number) => number;

const divide: MathFn = function (a, b) {
    return a / b;
};

console.log(resultBefore, heroName, divide(10, 2));

export { multiply, getHero, heroRef, heroName, divide, resultBefore };
