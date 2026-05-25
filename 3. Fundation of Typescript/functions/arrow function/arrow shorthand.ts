// ============================================================
// ARROW FUNCTION SHORTHAND (IMPLICIT RETURN)
// ============================================================

// Single expression — no return keyword, no braces
const square = (x: number): number => x * x;

const isEven = (n: number): boolean => n % 2 === 0;

// Return object literal — wrap in parentheses
const makePoint = (x: number, y: number): { x: number; y: number } => ({ x, y });

// Return array
const range = (n: number): number[] => Array.from({ length: n }, (_, i) => i + 1);

console.log(square(5));           // 25
console.log(isEven(4));           // true
console.log(makePoint(1, 2));     // { x: 1, y: 2 }
console.log(range(5));            // [1, 2, 3, 4, 5]

export { square, isEven, makePoint, range };
